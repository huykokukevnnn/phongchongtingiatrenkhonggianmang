// Ensure exactly N words by truncating or padding an array of words
function adjustWordCountArr(wordsArray, targetCount, paddingSentence) {
    if (wordsArray.length >= targetCount) {
        return wordsArray.slice(0, targetCount);
    } else {
        let padded = [...wordsArray];
        let padWords = paddingSentence.split(/\s+/).filter(w => w.length > 0);
        while (padded.length < targetCount) {
            padded = padded.concat(padWords);
        }
        return padded.slice(0, targetCount);
    }
}

// Process raw articles to exactly 800 context words and exactly 200 fake words
const processedArticles = rawArticles.map(article => {
    let totalContextWords = [];
    let fakeWords = [];
    
    // First pass: tokenize
    let parsedParagraphs = article.paragraphs.map(p => {
        if (p.type === 'body_fake') {
            const cWords = p.context_text.split(/\s+/).filter(w => w.length > 0);
            const fWords = p.fake_text.split(/\s+/).filter(w => w.length > 0);
            return {
                type: p.type,
                contextWords: cWords,
                fakeWords: fWords
            };
        } else {
            const cWords = p.text.split(/\s+/).filter(w => w.length > 0);
            return {
                type: p.type,
                contextWords: cWords
            };
        }
    });
    
    // Aggregate to check counts
    parsedParagraphs.forEach(p => {
        totalContextWords = totalContextWords.concat(p.contextWords || []);
        if (p.fakeWords) {
            fakeWords = fakeWords.concat(p.fakeWords);
        }
    });
    
    // Pad fake segment
    const exactFakeWords = adjustWordCountArr(fakeWords, 200, "Đây là một thông tin giả mạo thêm vào để đánh lừa người đọc.");
    
    // Distribute exact fake words back to the body_fake paragraph
    parsedParagraphs.forEach(p => {
        if (p.type === 'body_fake') {
            p.fakeWords = exactFakeWords;
        }
    });
    
    // Pad context words into the conclusion if needed, or truncate from the end
    const exactContextWords = adjustWordCountArr(totalContextWords, 800, "Đây là một câu thông tin bổ sung có tính chất khách quan để làm rõ thêm bối cảnh của vấn đề đang được thảo luận.");
    
    // Redistribute exact context words back to paragraphs sequentially
    let contextPointer = 0;
    parsedParagraphs.forEach(p => {
        const originalLen = p.contextWords.length;
        if (contextPointer < 800) {
            if (p.type === 'conclusion') {
                p.contextWords = exactContextWords.slice(contextPointer);
                contextPointer = 800;
            } else {
                const takeCount = Math.min(originalLen, 800 - contextPointer);
                p.contextWords = exactContextWords.slice(contextPointer, contextPointer + takeCount);
                contextPointer += takeCount;
            }
        } else {
            p.contextWords = [];
        }
    });

    return {
        title: article.title,
        url: article.url,
        category: article.category,
        date: article.date,
        paragraphs: parsedParagraphs
    };
});

// App State
let currentLevel = 0;
let attempts = 0;
let hintsRemaining = 3;
let isDragging = false;
let currentHighlightedSet = new Set();
let globalWordIndex = 0;

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
    if (levelIndex >= processedArticles.length) {
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
    btnReset.classList.remove('hidden');
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
    const article = processedArticles[currentLevel];
    
    // Inject Metadata
    articleTitle.textContent = article.title;
    articleCategory.textContent = article.category;
    articleDate.textContent = article.date;
    browserUrl.textContent = article.url;
    
    if (articleSapo) articleSapo.textContent = article.sapo;
    if (navCategoryActive) navCategoryActive.textContent = article.category;
    
    articleContent.innerHTML = ''; // Clear
    globalWordIndex = 0;
    
    article.paragraphs.forEach((p, index) => {
        // Inject SubHeadline and Image before the 2nd paragraph
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
        
        // Render context words
        if (p.contextWords && p.contextWords.length > 0) {
            p.contextWords.forEach(wordText => {
                const span = createWordSpan(wordText, false);
                pElement.appendChild(span);
                pElement.appendChild(document.createTextNode(' '));
            });
        }
        
        // Render fake words if it's body_fake
        if (p.type === 'body_fake' && p.fakeWords && p.fakeWords.length > 0) {
            p.fakeWords.forEach(wordText => {
                const span = createWordSpan(wordText, true);
                pElement.appendChild(span);
                pElement.appendChild(document.createTextNode(' '));
            });
        }
        
        // Append paragraph to container if it has content
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
    
    span.addEventListener('mousedown', () => handleWordInteraction(currentIndex, span));
    span.addEventListener('mouseenter', () => {
        if (isDragging) handleWordInteraction(currentIndex, span);
    });
    
    span.addEventListener('touchstart', (e) => {
        e.preventDefault(); 
        handleWordInteraction(currentIndex, span);
    });
    
    globalWordIndex++;
    return span;
}

function handleWordInteraction(index, spanElement) {
    if (attempts >= 2 && modal.classList.contains('hidden') === false) return; 
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
document.addEventListener('mouseup', () => isDragging = false);

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains('word') && !btnVerify.disabled) {
        const idx = parseInt(element.dataset.index);
        if (!currentHighlightedSet.has(idx)) {
            currentHighlightedSet.add(idx);
            element.classList.add('highlighted');
        }
    }
});
document.addEventListener('touchstart', () => isDragging = true);
document.addEventListener('touchend', () => isDragging = false);

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
    
    const totalFakeWords = 200; 
    const ratio = correctHighlights / totalFakeWords;
    
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

// Start app
initLevel(0);
