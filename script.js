const contentWrapper = document.querySelector('.content-wrapper');
const emojis = ['😊', '😄', '😁', '😂', '🤣', '🤩', '😍', '🥰', '😘', '🤗']; // Add more emojis as needed
let emojiCount = 0; // Initialize counter

function createEmoji() {
  if (emojiCount >= 150) return; // Stop creating emojis after reaching 150

  const emojiElement = document.createElement('div');
  emojiElement.classList.add('emoji');

  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  emojiElement.textContent = randomEmoji;

  contentWrapper.appendChild(emojiElement);

  // Randomize position and animation speed
  emojiElement.style.left = Math.random() * 100 + '%';
  emojiElement.style.top = Math.random() * 100 + '%';
  emojiElement.style.animation = `bounce ${Math.random() * 2 + 1}s ease-in-out infinite`;

  emojiCount++; // Increment counter
}

createEmoji(); // Create initial emoji
const intervalId = setInterval(() => {
  createEmoji(); // Create new emoji every second

  if (emojiCount >= 150) {
    clearInterval(intervalId); // Stop the interval when 150 emojis are created
  }
}, 1000); 

// MESSAGES
// Get references to form elements
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messageDisplay = document.getElementById('messageDisplay');

// Function to display messages from local storage
function displayMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messageDisplay.innerHTML = '<h3>Messages:</h3>';
    messages.forEach((msg, index) => {
        const messageElement = document.createElement('p');
        messageElement.textContent = msg;
        messageDisplay.appendChild(messageElement);
    });
}

// Function to handle form submission
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;

    if (message) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
        messageInput.value = ''; // Clear the input field
        displayMessages(); // Update the displayed messages
    }
});

// Display existing messages when page loads
displayMessages();
