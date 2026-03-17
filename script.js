// Typing Animation (once)
const typingElement = document.getElementById('typing');
const phrase = "Cloud Computing Student";
let index = 0;

function typeOnce() {
  if (index <= phrase.length) {
    typingElement.textContent = phrase.substring(0, index);
    index++;
    setTimeout(typeOnce, 150); // typing speed
  }
}

typeOnce();
// Hamburger Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Theme Toggle
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});
