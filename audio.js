// Audio handling functionality

// Create a speech synthesis controller
const speechController = {
  // TTS (Text-to-Speech) functionality 
  speak: function(text, rate = 0.8, pitch = 1) {
    // Cancel any current speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    
    // Create new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure speech settings - optimized for children
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = 1;
    
    // Use a child-friendly voice if available
    const voices = speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.name.toLowerCase().includes('samantha') || // macOS
      voice.name.toLowerCase().includes('microsoft zira') || // Windows
      voice.name.toLowerCase().includes('google uk english female') // Chrome
    );
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    } else {
      // Fallback to any female voice
      const femaleVoice = voices.find(voice => 
        voice.name.toLowerCase().includes('female') ||
        voice.name.toLowerCase().includes('girl')
      );
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
    }
    
    // Speak the text
    window.speechSynthesis.speak(utterance);
    
    // Return a function to cancel speaking if needed
    return {
      cancel: () => {
        window.speechSynthesis.cancel();
      }
    };
  },
  
  // Speak a letter with child-friendly settings
  speakLetter: function(letter) {
    return this.speak(letter, 0.7, 1.2); // Slower with higher pitch for clarity
  },
  
  // Speak a word with child-friendly settings
  speakWord: function(word) {
    return this.speak(word, 0.8, 1.1); // Clear and engaging
  },
  
  // Speak with phonetic emphasis (for teaching)
  speakPhonetically: function(word) {
    // First say the word normally
    this.speak(word, 0.7, 1.1);
    
    // Then after a pause, speak it slowly with emphasis
    setTimeout(() => {
      // Speak each letter with a pause
      let letterIndex = 0;
      const speakNextLetter = () => {
        if (letterIndex < word.length) {
          const letter = word[letterIndex];
          this.speak(letter, 0.6, 1.2);
          letterIndex++;
          setTimeout(speakNextLetter, 800); // Longer pause between letters
        } else {
          // After spelling, say the full word again with enthusiasm
          setTimeout(() => {
            this.speak(word, 0.7, 1.15);
          }, 1000);
        }
      };
      
      setTimeout(speakNextLetter, 1200);
    }, 1500);
  },
  
  // Initialize voices with retry mechanism
  init: function() {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      if (voices.length === 0) {
        setTimeout(loadVoices, 100); // Retry if voices aren't loaded yet
      }
    };
    
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }
};

// Initialize speech synthesis when the page loads
window.addEventListener('DOMContentLoaded', function() {
  speechController.init();
});

// Enhanced visual feedback when audio is playing
function showPlayingIndicator(element) {
  element.classList.add('playing');
  element.classList.add('bounce-once');
  
  setTimeout(() => {
    element.classList.remove('playing');
    element.classList.remove('bounce-once');
  }, 2000);
}

// Enhanced success indicator with multiple animations
function showSuccessIndicator(element) {
  element.classList.add('success-pulse');
  element.classList.add('scale-pop');
  
  setTimeout(() => {
    element.classList.remove('success-pulse');
    element.classList.remove('scale-pop');
  }, 1000);
}
// Speak a number with child-friendly settings
speechController.speakNumber = function(number) {
  return this.speak(number.toString(), 0.8, 1.1); // Clear and engaging
};
// Speak a color with child-friendly settings
speechController.speakColor = function(color) {
  return this.speak(color, 0.8, 1.1); // Clear and engaging
};