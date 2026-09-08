document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const backToTop = document.querySelector('.back-to-top');
  const contactForm = document.getElementById('contactForm');

  if (navToggle && navbarCollapse) {
    navToggle.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });

    navbarCollapse.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
  }

  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    };

    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop);
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const alertBox = document.getElementById('contactSuccess');
      if (alertBox) {
        alertBox.classList.remove('d-none');
        alertBox.textContent = 'Thank you for contacting Can Malayali. We will get back to you soon.';
      }

      contactForm.reset();
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
