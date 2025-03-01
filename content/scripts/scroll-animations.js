document.addEventListener('DOMContentLoaded', function() {
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden');
      } else {
        // Only add the hidden class if it was previously visible
        if (entry.target.classList.contains('visible')) {
          entry.target.classList.remove('visible');
          entry.target.classList.add('hidden');
        }
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: [0.15, 0.5] // Trigger at different visibility thresholds
  });

  // Observe all elements with the scroll-fade class
  document.querySelectorAll('.scroll-fade').forEach(element => {
    observer.observe(element);
  });
});