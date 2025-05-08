// Main application initialization

// When the document is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize UI components
  initializeUI();
  
  // Preload voices for speech synthesis
  preloadVoices();
  
  // Add event listeners for keyboard navigation
  document.addEventListener('keydown', handleKeyboardNavigation);
  
  // Update page title
  document.title = "ABC Learning Adventure";
  
  // Set focus to the first letter for accessibility
  setTimeout(() => {
    const firstLetter = document.querySelector('.letter-card');
    if (firstLetter) {
      firstLetter.setAttribute('tabindex', '0');
      firstLetter.focus();
    }
  }, 1000);
});

// Handle keyboard navigation
function handleKeyboardNavigation(event) {
  // If we're on the alphabet grid
  const lettersGrid = document.querySelector('.alphabet-container');
  const letterDetail = document.querySelector('.letter-detail-container');
  
  if (lettersGrid.style.display !== 'none') {
    // If Escape key is pressed, focus the first letter
    if (event.key === 'Escape') {
      const firstLetter = document.querySelector('.letter-card');
      if (firstLetter) {
        firstLetter.focus();
      }
    }
  } else if (!letterDetail.classList.contains('hidden')) {
    // If we're in the letter detail view
    if (event.key === 'Escape' || event.key === 'Backspace') {
      // Go back to alphabet grid
      showAlphabetGrid();
      
      // Focus the letter we were viewing
      const activeLetter = document.querySelector(`.letter-card[data-letter="${letterDetail.querySelector('.letter-focus').textContent}"]`);
      if (activeLetter) {
        activeLetter.focus();
      }
    }
  }
}

// Enable tab navigation for letter cards
function setupTabNavigation() {
  const letterCards = document.querySelectorAll('.letter-card');
  letterCards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    
    // Add keyboard event listener
    card.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        // Trigger click on Enter or Space
        card.click();
      }
    });
  });
}

// Set up tab navigation after the UI is initialized
window.addEventListener('load', function() {
  setupTabNavigation();
  
  // Add accessibility attributes
  document.querySelector('.alphabet-container').setAttribute('role', 'grid');
  document.querySelector('.alphabet-container').setAttribute('aria-label', 'Alphabet Letters');
  
  document.querySelectorAll('.letter-card').forEach(card => {
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Letter ${card.textContent}`);
  });
});

// Add some fun confetti animation when a child completes all letters
function checkForCompletion() {
  const viewedLetters = trackProgress.getViewedLetters();
  if (viewedLetters.length === 26) {
    showCompletionCelebration();
  }
}

// Show celebration animation
function showCompletionCelebration() {
  // Create confetti container
  const confettiContainer = document.createElement('div');
  confettiContainer.className = 'confetti-container';
  document.body.appendChild(confettiContainer);
  
  // Add confetti pieces
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
    confettiContainer.appendChild(confetti);
  }
  
  // Show congratulations message
  const message = document.createElement('div');
  message.className = 'completion-message';
  message.innerHTML = '<h2>Congratulations!</h2><p>You\'ve learned all the letters of the alphabet!</p>';
  document.body.appendChild(message);
  
  // Remove celebration after animation
  setTimeout(() => {
    confettiContainer.remove();
    message.remove();
  }, 8000);
}
// Initialize numbers section
initializeNumbers();

function initializeNumbers() {
  const numbersContainer = document.querySelector('.numbers-container');
  const numbers = Array.from({ length: 11 }, (_, i) => i ); // Numbers 1 to 10

  numbers.forEach(number => {
    const card = document.createElement('div');
    card.className = 'number-card';
    card.dataset.number = number;
    card.textContent = number;

    card.addEventListener('click', function() {
      speechController.speak(number.toString());
      showPlayingIndicator(this);
      showSuccessIndicator(this);
    });

    numbersContainer.appendChild(card);
  });

  numbersContainer.classList.remove('hidden');
}
// Initialize colors section
initializeColors();

function initializeColors() {
  const colorsContainer = document.querySelector('.colors-container');
  const colorsData = [
    { name: 'Red', color: '#FF0000' },
    { name: 'Green', color: '#00FF00' },
    { name: 'Blue', color: '#0000FF' },
    { name: 'Black', color: '#000000' },
    { name: 'White', color: '#FFFFFF' },
    { name: 'Purple', color: '#800080' },
    { name: 'Orange', color: '#FFA500' },
    { name: 'Pink', color: '#FFC0CB' }
  ];

  colorsData.forEach(color => {
    const card = document.createElement('div');
    card.className = 'color-card';
    card.dataset.color = color.name;
    card.textContent = color.name;
    card.style.backgroundColor = color.color;

    card.addEventListener('click', function() {
      speechController.speak(color.name);
      showPlayingIndicator(this);
      showSuccessIndicator(this);
    });

    colorsContainer.appendChild(card);
  });

  colorsContainer.classList.remove('hidden');
}