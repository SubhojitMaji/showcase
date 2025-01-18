// Add this to your HTML or as a separate JS file
document.addEventListener('DOMContentLoaded', function() {
    // Add theme toggle button to body
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.innerHTML = '🌓';
    document.body.appendChild(toggleBtn);
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  
    // Theme toggle functionality
    toggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  
    // Collapsible callouts
    document.querySelectorAll('.callout[data-collapse]').forEach(callout => {
      const title = callout.querySelector('.callout-title');
      title.addEventListener('click', () => {
        const isCollapsed = callout.getAttribute('data-collapse') === 'true';
        callout.setAttribute('data-collapse', !isCollapsed);
      });
    });
  });