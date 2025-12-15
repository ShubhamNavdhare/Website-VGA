console.log("VGA website loaded");

/* Card hover glow & ripple */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  });
});

/* Scroll reveal */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal-on-scroll").forEach(el => {
  observer.observe(el);
});
