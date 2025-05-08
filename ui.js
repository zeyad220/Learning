// UI Interactions

// DOM References
let alphabetContainer;
let letterDetailContainer;
let letterDetail;
let backButton;

// Initialize UI
function initializeUI() {
  // Get DOM elements
  alphabetContainer = document.querySelector('.alphabet-container');
  letterDetailContainer = document.querySelector('.letter-detail-container');
  letterDetail = document.querySelector('.letter-detail');
  backButton = document.querySelector('.back-button');
  
  // Create alphabet cards
  createAlphabetCards();
  
  // Add event listener to back button
  backButton.addEventListener('click', showAlphabetGrid);
  
  // Initialize image lazy loading
  setupImageLazyLoading();
}

// Create alphabet cards
function createAlphabetCards() {
  alphabetData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.dataset.letter = item.letter;
    card.textContent = item.letter;
    
    // Add click event
    card.addEventListener('click', function() {
      // Play the letter sound
      speechController.speakLetter(item.letter);
      showPlayingIndicator(this);
      showSuccessIndicator(this);
      
      // Mark as viewed in progress tracking
      trackProgress.markLetterViewed(item.letter);
      
      // Show letter detail view after a short delay
      setTimeout(() => {
        showLetterDetail(item);
      }, 800);
    });
    
    // Check if this letter has been viewed before and add an indicator
    if (trackProgress.isLetterViewed(item.letter)) {
      const visitedIndicator = document.createElement('span');
      visitedIndicator.className = 'visited-indicator';
      visitedIndicator.textContent = '✓';
      card.appendChild(visitedIndicator);
    }
    
    alphabetContainer.appendChild(card);
  });
}

// Show letter detail view with enhanced animations
function showLetterDetail(letterData) {
  // Hide alphabet grid with fade out
  alphabetContainer.style.opacity = '0';
  alphabetContainer.style.transform = 'scale(0.95)';
  
  setTimeout(() => {
    alphabetContainer.style.display = 'none';
    
    // Show letter detail
    letterDetailContainer.classList.remove('hidden');
    letterDetailContainer.style.opacity = '1';
    letterDetailContainer.style.transform = 'scale(1)';
  }, 300);
  
  // Clear previous content
  letterDetail.innerHTML = '';
  
  // Create letter focus element
  const letterFocus = document.createElement('div');
  letterFocus.className = 'letter-focus';
  letterFocus.textContent = letterData.letter;
  
  // Add click event to letter focus
  letterFocus.addEventListener('click', function() {
    speechController.speakLetter(letterData.letter);
    showPlayingIndicator(this);
  });
  
  // Create words container
  const wordsContainer = document.createElement('div');
  wordsContainer.className = 'letter-words';
  
  // Create word cards with staggered animation
  letterData.words.forEach((word, index) => {
    const wordCard = createWordCard(word);
    wordCard.style.animationDelay = `${index * 0.2}s`;
    wordsContainer.appendChild(wordCard);
  });
  
  // Append elements
  letterDetail.appendChild(letterFocus);
  letterDetail.appendChild(wordsContainer);
}

// Create a word card with enhanced image handling
function createWordCard(wordData) {
  const card = document.createElement('div');
  card.className = 'word-card';
  
  // Create image container
  const imgContainer = document.createElement('div');
  imgContainer.className = 'word-image-container';
  
  // Create image with loading state
  const img = document.createElement('img');
  img.className = 'word-image loading';
  img.src = wordData.image;
  img.alt = wordData.text;
  img.loading = 'lazy';
  
  // Handle image load
  img.onload = () => {
    img.classList.remove('loading');
    img.classList.add('loaded');
  };
  
  // Create word text
  const wordText = document.createElement('div');
  wordText.className = 'word-text';
  wordText.textContent = wordData.text;
  
  // Add click event
  card.addEventListener('click', function() {
    speechController.speakWord(wordData.text);
    showPlayingIndicator(this);
    showSuccessIndicator(this);
  });
  
  // Double click for phonetic spelling
  card.addEventListener('dblclick', function(e) {
    e.preventDefault();
    speechController.speakPhonetically(wordData.text);
    showPlayingIndicator(this);
  });
  
  // Append elements
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);
  card.appendChild(wordText);
  
  return card;
}

// Show alphabet grid with animation
function showAlphabetGrid() {
  // Fade out letter detail
  letterDetailContainer.style.opacity = '0';
  letterDetailContainer.style.transform = 'scale(1.05)';
  
  setTimeout(() => {
    letterDetailContainer.classList.add('hidden');
    
    // Show alphabet grid
    alphabetContainer.style.display = 'grid';
    alphabetContainer.style.opacity = '1';
    alphabetContainer.style.transform = 'scale(1)';
  }, 300);
}

// Setup image lazy loading
function setupImageLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Handle browser back button
window.addEventListener('popstate', function() {
  showAlphabetGrid();
});

// Show numbers section
function showNumbersSection() {
  const numbersContainer = document.querySelector('.numbers-container');
  numbersContainer.classList.remove('hidden');
}

// Hide numbers section
function hideNumbersSection() {
  const numbersContainer = document.querySelector('.numbers-container');
  numbersContainer.classList.add('hidden');
}
function createNumberCards() {
  const numbersContainer = document.querySelector('.numbers-container');
  numbersData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'number-card';
    card.dataset.number = item.number;
    card.textContent = item.number;

    card.addEventListener('click', function() {
      speechController.speakNumber(item.number);
      showPlayingIndicator(this);
      showSuccessIndicator(this);
    });

    numbersContainer.appendChild(card);
  });
}
// Preload voice data with retry mechanism
function preloadVoices() {
  const maxAttempts = 10;
  let attempts = 0;

  function tryLoadVoices() {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0 && attempts < maxAttempts) {
      attempts++;
      setTimeout(tryLoadVoices, 500);
    } else {
      speechController.init();
    }
  }

  tryLoadVoices();
}
// Show colors section
function showColorsSection() {
  const colorsContainer = document.querySelector('.colors-container');
  colorsContainer.classList.remove('hidden');
}

// Hide colors section
function hideColorsSection() {
  const colorsContainer = document.querySelector('.colors-container');
  colorsContainer.classList.add('hidden');
}
function createColorCards() {
  const colorsContainer = document.querySelector('.colors-container');
  colorsData.forEach(color => {
    const card = document.createElement('div');
    card.className = 'color-card';
    card.dataset.color = color.name;
    card.textContent = color.name;
    card.style.backgroundColor = color.color;

    card.addEventListener('click', function() {
      speechController.speakColor(color.name);
      showPlayingIndicator(this);
      showSuccessIndicator(this);
    });

    colorsContainer.appendChild(card);
  });
}