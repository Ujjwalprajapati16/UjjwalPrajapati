function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

  const imageSlides = document.querySelectorAll('.image-slide');
  let currentSlide = 0;
  
  function showSlide(n) {
      imageSlides[currentSlide].style.display = 'none';
      currentSlide = (n + imageSlides.length) % imageSlides.length;
      imageSlides[currentSlide].style.display = 'block';
  }
  
  function nextSlide() {
      showSlide(currentSlide + 1);
  }
  
  function previousSlide() {
      showSlide(currentSlide - 1);
  }
  
  // Add event listeners for next and previous buttons
  document.getElementById('next-button').addEventListener('click', nextSlide);
  document.getElementById('prev-button').addEventListener('click', previousSlide);
  
  // Automatically advance slides every 5 seconds
  setInterval(nextSlide, 5000);

// Animate skills bars when they come into view
const skillsBars = document.querySelectorAll('.skill-bar');
window.addEventListener('scroll', animateSkillsBars);

function animateSkillsBars() {
    skillsBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (barPosition < screenPosition) {
            bar.style.width = bar.getAttribute('data-width');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});

