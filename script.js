document.getElementById('hamburger').addEventListener('click', function() {
  const navItems = document.querySelector('.nav-items');
  const navButtons = document.querySelector('.nav-buttons');
  
  navItems.classList.toggle('active');
  navButtons.classList.toggle('active');
  
  const expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
});
