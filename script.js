const contentWrapper = document.querySelector('.content-wrapper');
const emojis = ['😊', '😄', '😁', '😂', '🤣', '🤩', '😍', '🥰', '😘', '🤗']; // Add more emojis as needed

function createEmoji() {
  const emojiElement = document.createElement('div');
  emojiElement.classList.add('emoji');

  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  emojiElement.textContent = randomEmoji;

  contentWrapper.appendChild(emojiElement);

  // Randomize position and animation speed
  emojiElement.style.left = Math.random() * 100 + '%';
  emojiElement.style.top = Math.random() * 100 + '%';
  emojiElement.style.animation = `bounce ${Math.random() * 2 + 1}s ease-in-out infinite`;
}

createEmoji(); // Create initial emoji
setInterval(createEmoji, 1000); // Create new emoji every second