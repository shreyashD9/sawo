// Open modal when Login button is clicked
const openModalBtn = document.getElementById('open-login-modal-btn');
const modal = document.getElementById('admin-login-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Toggle mobile menu on hamburger icon click
document.getElementById('hamburger').addEventListener('click', function () {
  const navItems = document.querySelector('.nav-items');
  const navButtons = document.querySelector('.nav-buttons');
  
  navItems.classList.toggle('active');
  navButtons.classList.toggle('active');
  
  const expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
});

// Admin Login Modal Logic
const adminLoginModal = document.getElementById('admin-login-modal');
const adminModal = document.getElementById('adminModal');
const closeAdminLoginModal = document.getElementById('close-modal-btn');
const closeAdminModal = document.getElementById('closeAdminModal');
const adminLoginForm = document.getElementById('admin-login-form');  

// Open the Admin Login Modal when the login button is clicked
openModalBtn.addEventListener('click', () => {
  adminLoginModal.style.display = 'block';
});

// Close the Admin Login Modal
closeAdminLoginModal.addEventListener('click', () => {
  adminLoginModal.style.display = 'none';
});

// Close the Admin Modal
closeAdminModal.addEventListener('click', () => {
  adminModal.style.display = 'none';
});

// Handle Admin Login form submission
adminLoginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Admin login credentials
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate credentials
  if (username === 'teamsawo' && password === 'SawoTeam@009') {
    adminLoginModal.style.display = 'none';
    adminModal.style.display = 'block';
  } else {
    alert('Invalid username or password');
  }
});
