// Ensure exactly N words by truncating or padding
function adjustWordCount(text, targetCount) {
    let words = text.split(/\s+/).filter(w => w.length > 0);
    
    if (words.length >= targetCount) {
        return words.slice(0, targetCount).join(" ");
    } else {
        // Pad with a neutral sentence until we hit the target
        const paddingSentence = "Đây là một câu thông tin bổ sung để đảm bảo đủ số lượng từ theo yêu cầu của bài tập phân tích nội dung.";
        let padWords = paddingSentence.split(/\s+/);
        while (words.length < targetCount) {
            words = words.concat(padWords);
        }
        return words.slice(0, targetCount).join(" ");
    }
}

// Process raw articles to exactly 800 context words and exactly 200 fake words
const processedArticles = rawArticles.map(article => {
    const exactContext = adjustWordCount(article.context, 800);
    const exactFake = adjustWordCount(article.fake, 200);
    
    return {
        title: article.title,
        contextWords: exactContext.split(/\s+/),
        fakeWords: exactFake.split(/\s+/)
    };
});

// App State
let currentLevel = 0;
let attempts = 0;
let isDragging = false;
let currentHighlightedSet = new Set(); // Stores indices of highlighted words

// DOM Elements
const levelDisplay = document.getElementById('level-display');
const articleTitle = document.getElementById('article-title');
const articleContent = document.getElementById('article-content');
const attemptsDisplay = document.getElementById('attempts-display');
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
    currentHighlightedSet.clear();
    
    updateUI();
    renderArticle();
}

function updateUI() {
    levelDisplay.textContent = `Bài học: Màn ${currentLevel + 1}/4`;
    attemptsDisplay.textContent = `${attempts} / 2`;
    
    // Reset buttons state
    btnVerify.disabled = false;
    btnVerify.classList.remove('opacity-50', 'cursor-not-allowed');
}

function renderArticle() {
    const article = processedArticles[currentLevel];
    articleTitle.textContent = article.title;
    
    articleContent.innerHTML = ''; // Clear
    
    // We append the fake segment after the context segment
    // To make it look natural, we just render them consecutively.
    
    const allWords = [];
    
    // Push context words
    article.contextWords.forEach((word) => {
        allWords.push({ text: word, isFake: false });
    });
    
    // Push fake words
    article.fakeWords.forEach((word) => {
        allWords.push({ text: word, isFake: true });
    });
    
    // Create DOM elements
    allWords.forEach((item, index) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = item.text + " ";
        span.dataset.index = index;
        span.dataset.isFake = item.isFake;
        
        // Mouse events for drag highlighting
        span.addEventListener('mousedown', () => handleWordInteraction(index, span));
        span.addEventListener('mouseenter', () => {
            if (isDragging) handleWordInteraction(index, span);
        });
        
        // Touch events
        span.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent scroll while highlighting
            handleWordInteraction(index, span);
        });
        
        articleContent.appendChild(span);
    });
}

// Interaction logic
function handleWordInteraction(index, spanElement) {
    if (attempts >= 2 && modal.classList.contains('hidden') === false) return; // Block interaction if level is fully over and modal is showing
    
    // We block interaction if the level has been verified and waiting for next.
    // Wait, the prompt says: "Retain the student's current highlights" if attempts < 2.
    // So they CAN modify highlights if attempts < 2. 
    // If we're showing the "Answer key visualization" (Green/Red), we shouldn't let them edit.
    if (btnVerify.disabled) return; // Prevent editing after verify is finalized
    
    if (currentHighlightedSet.has(index)) {
        currentHighlightedSet.delete(index);
        spanElement.classList.remove('highlighted');
    } else {
        currentHighlightedSet.add(index);
        spanElement.classList.add('highlighted');
    }
}

// Global Drag State Handlers
document.addEventListener('mousedown', () => isDragging = true);
document.addEventListener('mouseup', () => isDragging = false);

// Touch move handler to find element under finger
document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.classList.contains('word') && !btnVerify.disabled) {
        const idx = parseInt(element.dataset.index);
        // Only highlight, don't toggle repeatedly while moving
        if (!currentHighlightedSet.has(idx)) {
            currentHighlightedSet.add(idx);
            element.classList.add('highlighted');
        }
    }
});
document.addEventListener('touchstart', () => isDragging = true);
document.addEventListener('touchend', () => isDragging = false);

// Buttons
btnReset.addEventListener('click', () => {
    if (btnVerify.disabled) return;
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
        
        if (isFake && isHighlighted) {
            correctHighlights++;
        }
    });
    
    const totalFakeWords = 200; // Hardcoded requirement
    const ratio = correctHighlights / totalFakeWords;
    
    if (ratio >= 0.8) {
        // Success
        visualizeAnswerKey(wordSpans);
        showModal(true, "Tuyệt vời! Bạn đã phát hiện chính xác các thông tin giả mạo.");
    } else {
        // Fail
        if (attempts < 1) {
            attempts++;
            updateUI();
            showToast("Bạn chưa đánh dấu đủ hoặc chính xác những từ ngữ sai sự thật. Hãy đọc kỹ lại đoạn văn và thử lại!");
        } else {
            attempts = 2;
            updateUI();
            // Force complete
            visualizeAnswerKey(wordSpans);
            showModal(false, "Bạn đã hết số lần thử. Hãy xem kỹ những phần tin giả được đánh dấu đỏ mà bạn đã bỏ sót.");
        }
    }
}

function visualizeAnswerKey(wordSpans) {
    // Lock interactions
    btnVerify.disabled = true;
    btnVerify.classList.add('opacity-50', 'cursor-not-allowed');
    btnReset.disabled = true;
    btnReset.classList.add('opacity-50', 'cursor-not-allowed');
    
    wordSpans.forEach(span => {
        const isFake = span.dataset.isFake === "true";
        const isHighlighted = span.classList.contains('highlighted');
        
        // Remove standard highlight
        span.classList.remove('highlighted');
        
        if (isFake && isHighlighted) {
            // Correctly highlighted fake word
            span.classList.add('correct');
        } else if (isFake && !isHighlighted) {
            // Missed fake word
            span.classList.add('missed');
        } else if (!isFake && isHighlighted) {
            // Wrongly highlighted context word
            span.classList.add('wrong');
        }
    });
}

function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.remove('opacity-0', 'pointer-events-none');
    
    // Auto hide
    setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none');
    }, 4000);
}

function showModal(isSuccess, message) {
    modalTitle.textContent = isSuccess ? "Kết quả xuất sắc!" : "Chưa chính xác!";
    modalTitle.className = isSuccess ? "text-4xl md:text-5xl font-extrabold text-green-400 mb-6 tracking-tight" : "text-4xl md:text-5xl font-extrabold text-red-500 mb-6 tracking-tight";
    modalIcon.textContent = isSuccess ? "🎉" : "💡";
    modalDesc.textContent = message;
    
    // Show modal
    modal.classList.remove('hidden');
    // trigger reflow
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
}

btnNext.addEventListener('click', () => {
    // Hide modal
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        // Next level
        btnReset.disabled = false;
        btnReset.classList.remove('opacity-50', 'cursor-not-allowed');
        initLevel(currentLevel + 1);
    }, 500);
});

function showCompletionScreen() {
    completionScreen.classList.remove('hidden');
    void completionScreen.offsetWidth;
    completionScreen.classList.remove('opacity-0');
}

// Start app
initLevel(0);
