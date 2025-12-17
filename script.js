/* =====================================================
   SMOOTH SCROLL FOR NAV LINKS
===================================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* =====================================================
   ACTIVE NAV LINK ON SCROLL
===================================================== */
const sections = document.querySelectorAll('section, header.hero');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

/* =====================================================
   CARD HOVER LIGHT TRACKING (SUBTLE)
   (matches your CSS --x / --y usage)
===================================================== */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty('--x', `${x}%`);
    card.style.setProperty('--y', `${y}%`);
  });
});
/* =====================================================
   SUBTLE CARD GLOW TRACKING (INDEX ONLY)
===================================================== */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty('--x', `${x}%`);
    card.style.setProperty('--y', `${y}%`);
  });
});
