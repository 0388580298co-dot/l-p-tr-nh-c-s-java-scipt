const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = `dot ${index === 0 ? 'active' : ''}`;
  dot.setAttribute('aria-label', `Chuyển tới slide ${index + 1}`);
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

document.getElementById('prevSlide').addEventListener('click', () => showSlide(currentSlide - 1));
document.getElementById('nextSlide').addEventListener('click', () => showSlide(currentSlide + 1));
setInterval(() => showSlide(currentSlide + 1), 5000);

const countdownElement = document.getElementById('countdown');
const saleEnd = Date.now() + 1000 * 60 * 60 * 12;

function updateCountdown() {
  const remaining = Math.max(0, saleEnd - Date.now());
  const hours = Math.floor(remaining / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  countdownElement.textContent = [hours, minutes, seconds].map(n => String(n).padStart(2, '0')).join(':');
}
updateCountdown();
setInterval(updateCountdown, 1000);
