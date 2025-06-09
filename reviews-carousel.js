const prevButton = document.querySelector('.prev-review');
const nextButton = document.querySelector('.next-review');
const reviews = document.querySelectorAll('.review');
let currentIndex = 0;

// Function to update visible review
function updateReviews(index) {
  reviews.forEach((review, i) => {
    if (i === index) {
      review.classList.add('active');
      review.setAttribute('aria-hidden', 'false');
      review.setAttribute('tabindex', '0');
    } else {
      review.classList.remove('active');
      review.setAttribute('aria-hidden', 'true');
      review.setAttribute('tabindex', '-1');
    }
  });
}

// Button click handlers
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  updateReviews(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  updateReviews(currentIndex);
});

// Keyboard arrow key navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevButton.click();
  if (e.key === 'ArrowRight') nextButton.click();
});

// Set initial state
updateReviews(currentIndex);