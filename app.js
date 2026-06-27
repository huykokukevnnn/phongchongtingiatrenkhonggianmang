// App State
let currentLevel = 0;
let attempts = 0;
let hintsRemaining = 3;
let isDragging = false;
let currentDragLineY = null;
let currentHighlightedSet = new Set();
let globalWordIndex = 0;
let totalFakeWordsInLevel = 0;

// DOM Elements
const levelDisplay = document.getElementById('level-display');
const articleTitle = document.getElementById('article-title');
const articleCategory = document.getElementById('article-category');
const articleDate = document.getElementById('article-date');
const browserUrl = document.getElementById('browser-url');
const articleSapo = document.getElementById('article-sapo');
const navCategoryActive = document.getElementById('nav-category-active');
const articleContent = document.getElementById('article-content');
const attemptsDisplay = document.getElementById('attempts-display');
const btnHint = document.getElementById('btn-hint');
const hintCount = document.getElementById('hint-count');
const btnProceedReview = document.getElementById('btn-proceed-review');
const btnReset = document.getElementById('btn-reset');
const btnVerify = document.getElementById('btn-verify');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-msg');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const btnNext = document.getElementById('btn-next');
const modalIcon = document.getElementById('modal-icon');
const completionScreen = document.getElementById('completion-screen');
const modalContent = document.getElementById('modal-content');

// Initialize first level
function initLevel(levelIndex) {
    if (levelIndex >= rawArticles.length) {
        showCompletionScreen();
        return;
    }
    
    currentLevel = levelIndex;
    attempts = 0;
    hintsRemaining = 3;
    currentHighlightedSet.clear();
    
    updateUI();
    renderArticle();
}

function updateUI() {
    if (levelDisplay) levelDisplay.textContent = `Bài học: Màn ${currentLevel + 1}/4`;
    attemptsDisplay.textContent = `${attempts} / 3`;
    hintCount.textContent = hintsRemaining;
    
    // Reset buttons state
    btnVerify.disabled = false;
    btnVerify.classList.remove('hidden');
    btnVerify.classList.remove('opacity-50', 'cursor-not-allowed');
    btnReset.classList.remove('hidden');
    btnReset.disabled = false;
    btnReset.classList.remove('opacity-50', 'cursor-not-allowed');
    btnProceedReview.classList.add('hidden');
    
    if (hintsRemaining <= 0) {
        btnHint.disabled = true;
        btnHint.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        btnHint.disabled = false;
        btnHint.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

function renderArticle() {
    const article = rawArticles[currentLevel];
    
    // Inject Metadata
    articleTitle.textContent = article.title;
    articleCategory.textContent = article.category;
    articleDate.textContent = article.date;
    browserUrl.textContent = article.url;
    
    if (articleSapo) articleSapo.textContent = article.sapo;
    if (navCategoryActive) navCategoryActive.textContent = article.category;
    
    articleContent.innerHTML = ''; // Clear
    globalWordIndex = 0;
    totalFakeWordsInLevel = 0;
    
    article.blocks.forEach((block, index) => {
        // Inject SubHeadline and Image before the 2nd paragraph block
        if (index === 1) {
            if (article.subHeadline) {
                const h3 = document.createElement('h3');
                h3.className = 'text-2xl md:text-3xl font-black text-gray-900 mt-10 mb-6';
                h3.textContent = article.subHeadline;
                articleContent.appendChild(h3);
            }
            if (article.image) {
                const figure = document.createElement('figure');
                figure.className = 'my-8 max-w-3xl mx-auto';
                const img = document.createElement('img');
                img.src = article.image;
                img.alt = 'Ảnh bài báo';
                img.className = 'w-full h-auto object-cover bg-gray-100 rounded-sm';
                figure.appendChild(img);
                
                if (article.imageCaption) {
                    const figcaption = document.createElement('figcaption');
                    figcaption.className = 'text-center text-sm md:text-base text-gray-500 mt-3 font-serif';
                    figcaption.textContent = article.imageCaption;
                    figure.appendChild(figcaption);
                }
                articleContent.appendChild(figure);
            }
        }

        // Create paragraph wrapper
        const pElement = document.createElement('p');
        pElement.className = 'mb-6 md:mb-8'; 
        
        block.forEach(sentence => {
            const words = sentence.text.split(/\s+/).filter(w => w.length > 0);
            words.forEach(wordText => {
                const span = createWordSpan(wordText, sentence.isFake);
                pElement.appendChild(span);
                pElement.appendChild(document.createTextNode(' '));
                if (sentence.isFake) totalFakeWordsInLevel++;
            });
        });
        
        if (pElement.childNodes.length > 0) {
            articleContent.appendChild(pElement);
        }
    });
}

function createWordSpan(text, isFake) {
    const span = document.createElement('span');
    span.className = 'word';
    span.textContent = text;
    span.dataset.index = globalWordIndex;
    span.dataset.isFake = isFake;
    
    const currentIndex = globalWordIndex;
    
    span.addEventListener('mousedown', () => {
        currentDragLineY = span.offsetTop;
        handleWordInteraction(currentIndex, span);
    });
    span.addEventListener('mouseenter', () => {
        if (isDragging) {
            if (currentDragLineY === null) currentDragLineY = span.offsetTop;
            if (Math.abs(span.offsetTop - currentDragLineY) <= 12) {
                handleWordInteraction(currentIndex, span);
            }
        }
    });
    
    span.addEventListener('touchstart', (e) => {
        e.preventDefault(); 
        currentDragLineY = span.offsetTop;
        handleWordInteraction(currentIndex, span);
    });
    
    globalWordIndex++;
    return span;
}

function handleWordInteraction(index, spanElement) {
    if (attempts >= 3 && modal.classList.contains('hidden') === false) return; 
    if (btnVerify.disabled) return; 
    
    if (currentHighlightedSet.has(index)) {
        currentHighlightedSet.delete(index);
        spanElement.classList.remove('highlighted');
    } else {
        currentHighlightedSet.add(index);
        spanElement.classList.add('highlighted');
    }
}

document.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => {
    isDragging = false;
    currentDragLineY = null;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains('word') && !btnVerify.disabled) {
        if (currentDragLineY === null) currentDragLineY = element.offsetTop;
        
        if (Math.abs(element.offsetTop - currentDragLineY) <= 12) {
            const idx = parseInt(element.dataset.index);
            if (!currentHighlightedSet.has(idx)) {
                currentHighlightedSet.add(idx);
                element.classList.add('highlighted');
            }
        }
    }
});
document.addEventListener('touchstart', () => isDragging = true);
document.addEventListener('touchend', () => {
    isDragging = false;
    currentDragLineY = null;
});

btnHint.addEventListener('click', () => {
    if (hintsRemaining <= 0 || btnHint.disabled || btnVerify.disabled || !btnProceedReview.classList.contains('hidden')) return;
    
    const wordSpans = articleContent.querySelectorAll('.word');
    for (let span of wordSpans) {
        if (span.dataset.isFake === "true") {
            const idx = parseInt(span.dataset.index);
            if (!currentHighlightedSet.has(idx)) {
                currentHighlightedSet.add(idx);
                span.classList.add('highlighted');
                span.scrollIntoView({ behavior: "smooth", block: "center" });
                break;
            }
        }
    }
    
    hintsRemaining--;
    updateUI();
});

btnProceedReview.addEventListener('click', () => {
    initLevel(currentLevel + 1);
});

btnReset.addEventListener('click', () => {
    if (btnVerify.disabled || btnReset.classList.contains('hidden')) return;
    currentHighlightedSet.clear();
    const wordSpans = articleContent.querySelectorAll('.word');
    wordSpans.forEach(span => span.classList.remove('highlighted'));
});

btnVerify.addEventListener('click', () => {
    verifyResults();
});

function verifyResults() {
    const wordSpans = articleContent.querySelectorAll('.word');
    let correctHighlights = 0;
    
    wordSpans.forEach(span => {
        const isFake = span.dataset.isFake === "true";
        const isHighlighted = span.classList.contains('highlighted');
        if (isFake && isHighlighted) correctHighlights++;
    });
    
    // Dynamic ratio based on strictly authored text
    const ratio = correctHighlights / (totalFakeWordsInLevel > 0 ? totalFakeWordsInLevel : 1);
    
    if (ratio >= 0.8) {
        visualizeAnswerKey(wordSpans);
        btnNext.textContent = "Tiến vào Bài tiếp theo";
        showModal(true, "Tuyệt vời! Bạn đã phát hiện chính xác các thông tin giả mạo.");
    } else {
        if (attempts < 2) {
            attempts++;
            updateUI();
            showToast("Bạn chưa đánh dấu đủ hoặc chính xác những từ ngữ sai sự thật. Hãy đọc kỹ lại đoạn văn và thử lại!");
        } else {
            attempts = 3;
            updateUI();
            visualizeAnswerKey(wordSpans);
            btnNext.textContent = "Xem những từ bị đánh dấu thiếu";
            showModal(false, "Bạn đã hết số lần thử. Hãy xem kỹ những phần tin giả được đánh dấu đỏ mà bạn đã bỏ sót.");
        }
    }
}

function visualizeAnswerKey(wordSpans) {
    btnVerify.disabled = true;
    btnVerify.classList.add('opacity-50', 'cursor-not-allowed');
    btnReset.disabled = true;
    btnReset.classList.add('opacity-50', 'cursor-not-allowed');
    
    wordSpans.forEach(span => {
        const isFake = span.dataset.isFake === "true";
        const isHighlighted = span.classList.contains('highlighted');
        
        span.classList.remove('highlighted');
        
        if (isFake && isHighlighted) {
            span.classList.add('correct');
        } else if (isFake && !isHighlighted) {
            span.classList.add('missed');
        } else if (!isFake && isHighlighted) {
            span.classList.add('wrong');
        }
    });
}

function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    
    setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none');
    }, 4500);
}

function showModal(isSuccess, message) {
    modalTitle.textContent = isSuccess ? "Kết quả xuất sắc!" : "Chưa chính xác!";
    modalTitle.className = isSuccess 
        ? "text-3xl md:text-4xl font-extrabold text-green-600 mb-4 tracking-tight" 
        : "text-3xl md:text-4xl font-extrabold text-red-600 mb-4 tracking-tight";
    modalIcon.textContent = isSuccess ? "🎉" : "💡";
    modalDesc.textContent = message;
    
    modal.classList.remove('hidden');
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
}

btnNext.addEventListener('click', () => {
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        if (attempts >= 3 && btnNext.textContent === "Xem những từ bị đánh dấu thiếu") {
            // Chế độ Review Mode
            btnVerify.classList.add('hidden');
            btnReset.classList.add('hidden');
            btnProceedReview.classList.remove('hidden');
            btnHint.disabled = true;
            btnHint.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            // Chuyển sang màn tiếp theo
            btnReset.disabled = false;
            initLevel(currentLevel + 1);
        }
    }, 500);
});

function showCompletionScreen() {
    completionScreen.classList.remove('hidden');
    void completionScreen.offsetWidth;
    completionScreen.classList.remove('opacity-0');
}

// Shuffle articles for random order on every load
for (let i = rawArticles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rawArticles[i], rawArticles[j]] = [rawArticles[j], rawArticles[i]];
}

// Start app
initLevel(0);
