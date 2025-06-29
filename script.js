
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Programmatically close the menu
    }
  });
});
document.addEventListener('click', function (event) {
  const isClickInsideNavbar = document.querySelector('.custom-navbar').contains(event.target);
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
    navbarToggler.click(); // Closes the navbar
  }
}); 
       
       const track = document.querySelector('.testimonial-track');
      const prev = document.getElementById('prev');
      const next = document.getElementById('next');
      let currentIndex = 0;

      function getVisibleCount() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
      }

      function updateSlider() {
        const testimonials = document.querySelectorAll('.testimonial');
        const visibleCount = getVisibleCount();
        const itemWidth = testimonials[0].offsetWidth;
        const maxIndex = testimonials.length - visibleCount;

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        const offset = currentIndex * itemWidth;
        track.style.transform = `translateX(-${offset}px)`;
      }

      next.addEventListener('click', () => {
        currentIndex++;
        updateSlider();
      });

      prev.addEventListener('click', () => {
        currentIndex--;
        updateSlider();
      });

      window.addEventListener('resize', updateSlider);
      window.addEventListener('load', updateSlider);


      let autoplayInterval;

function startAutoplay() {
  stopAutoplay(); // clear any previous interval
  autoplayInterval = setInterval(() => {
    const testimonials = document.querySelectorAll('.testimonial');
    const visibleCount = getVisibleCount();
    const maxIndex = testimonials.length - visibleCount;

    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0; // loop back to start
    }
    updateSlider();
  }, 5000); // 5000 ms = 5 seconds
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
}

// Reset autoplay on manual navigation
next.addEventListener('click', () => {
  currentIndex++;
  updateSlider();
  startAutoplay();
});

prev.addEventListener('click', () => {
  currentIndex--;
  updateSlider();
  startAutoplay();
});

window.addEventListener('resize', () => {
  currentIndex = 0;
  updateSlider();
  startAutoplay();
});

window.addEventListener('load', () => {
  updateSlider();
  startAutoplay();
});





  // Enable flip on tap for mobile
  document.querySelectorAll('.product-item').forEach((card) => {
    card.addEventListener('click', function () {
      this.classList.toggle('flipped');
    });
  });
