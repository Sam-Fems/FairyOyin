// document.addEventListener('DOMContentLoaded', function () {
//   const toggle = document.getElementById('menuToggle');
//   const mobileNav = document.getElementById('mobileNav');

//   toggle.addEventListener('click', () => {
//     mobileNav.classList.toggle('active');
//   });
// });

// Toggle mobile nav
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });
});

// Back to Top button behavior
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
