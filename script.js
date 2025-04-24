const suitcase = document.getElementById('suitcase');
const letter = document.getElementById('letter');
const heartsContainer = document.getElementById('hearts-container');

// Open letter on click
suitcase.addEventListener('click', () => {
  suitcase.style.display = 'none';
  letter.style.display = 'block';
});

// Drop hearts as the plane flies
function dropHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart-fall';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.textContent = '❤️';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// Drop hearts every 800ms
setInterval(dropHeart, 800);
