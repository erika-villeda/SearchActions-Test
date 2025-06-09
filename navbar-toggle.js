const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Set the initial state as inactive
navMenu.classList.add('inactive');

function toggleMenu(open) {
  if (open) {
    navMenu.classList.remove('slide-out', 'inactive');
    navMenu.classList.add('slide-in', 'active');
    hamburger.classList.add('active');
  } else {
    navMenu.classList.remove('slide-in', 'active');
    navMenu.classList.add('slide-out', 'inactive');
    hamburger.classList.remove('active');

    // Optional: remove slide-out class after animation
    setTimeout(() => {
      navMenu.classList.remove('slide-out');
    }, 400);
  }
}

// Hamburger toggle
hamburger.addEventListener('click', () => {
  const isActive = navMenu.classList.contains('active');
  toggleMenu(!isActive);
});

// Close on nav link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu(false);
  });
});
