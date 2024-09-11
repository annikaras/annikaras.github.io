function createGlitter() {
  const glitter = document.createElement('div');
  glitter.classList.add('glitter');

  const size = Math.random() * 20 + 5; // Random size between 5 and 25 pixels
  glitter.style.width = `${size}px`;
  glitter.style.height = `${size}px`;

  const top = Math.random() * window.innerHeight; // Random top position
  const left = Math.random() * window.innerWidth; // Random left position
  glitter.style.top = `${top}px`;
  glitter.style.left = `${left}px`;

  const duration = Math.random() * 5 + 2; // Random duration between 2 and 7 seconds
  glitter.style.animation = `fall ${duration}s linear infinite`;

  document.body.appendChild(glitter);
}

setInterval(createGlitter, 100); // Create glitter every 100 milliseconds
