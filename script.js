
// Toggle mobile menu on hamburger icon click
document.getElementById('hamburger').addEventListener('click', function () {
  const navItems = document.querySelector('.nav-items');
  const navButtons = document.querySelector('.nav-buttons');
  
  navItems.classList.toggle('active');
  navButtons.classList.toggle('active');

  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  this.innerHTML = isExpanded ? '&#9776;' : '&#x2715;';
});

// Handle modal visibility for login
const openModalBtn = document.getElementById('open-login-modal-btn');
const adminLoginModal = document.getElementById('admin-login-modal');
const adminModal = document.getElementById('adminModal');
const closeModalBtn = document.getElementById('close-modal-btn');
const closeAdminModal = document.getElementById('closeAdminModal');

openModalBtn.addEventListener('click', () => (adminLoginModal.style.display = 'block'));
closeModalBtn.addEventListener('click', () => (adminLoginModal.style.display = 'none'));
closeAdminModal.addEventListener('click', () => (adminModal.style.display = 'none'));

// Close modals on outside click
window.addEventListener('click', (event) => {
  if (event.target === adminLoginModal) adminLoginModal.style.display = 'none';
});

// Handle admin login
document.getElementById('admin-login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'teamsawo' && password === '123') {
    adminLoginModal.style.display = 'none';
    adminModal.style.display = 'block';
  } else {
    alert('Invalid username or password');
  }
});

// // Update ABC Drive date
// document.getElementById('update-date-form').addEventListener('submit', (event) => {
//   event.preventDefault();
//   const newDate = document.getElementById('new-date').value;

//   if (newDate) {
//     document.querySelector('.abc-date').textContent = newDate;
//     document.querySelector('.abc-note').textContent = `Get ready for the next drive on ${newDate}!`;
//     alert('Date updated successfully!');
//     adminModal.style.display = 'none';
//     document.getElementById('new-date').value = '';
//   } else {
//     alert('Please select a valid date.');
//   }
// });

// // Manage available slots
// let remainingSlots = 20; // Initialize default slots
// const slotsCountElement = document.getElementById('slots-count');
// const slotsNumberInput = document.getElementById('slots-number');

// slotsNumberInput.value = remainingSlots;
// document.getElementById('update-slots-form').addEventListener('submit', (event) => {
//   event.preventDefault();
//   const updatedSlots = parseInt(slotsNumberInput.value, 10);

//   if (!isNaN(updatedSlots) && updatedSlots >= 0) {
//     remainingSlots = updatedSlots;
//     slotsCountElement.textContent = remainingSlots;
//     alert(`Slots updated to ${remainingSlots}`);
//   } else {
//     alert('Enter a valid number of slots!');
//   }
// });

// Update achievements dynamically
let selectedAchievementId = '';
function openModal(achievementId) {
  selectedAchievementId = achievementId;
  document.getElementById('new-value').value = document.getElementById(achievementId).textContent;
  document.getElementById('update-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('update-modal').style.display = 'none';
}

function updateAchievement() {
  const newValue = document.getElementById('new-value').value;
  if (newValue && !isNaN(newValue)) {
    document.getElementById(selectedAchievementId).textContent = newValue;
    closeModal();
    alert('Achievement updated successfully!');
  } else {
    alert('Enter a valid number.');
  }
}

// Get elements
const donateBtn = document.querySelector('.nav-buttons .light');
const donationModal = document.getElementById('donation-modal');
const qrModal = document.getElementById('qr-modal');
const qr80gModal = document.getElementById('qr-80g-modal');
const closeDonationModal = document.getElementById('close-donation-modal');
const upiQrButton = document.getElementById('upi-qr-button');
const upi80gButton = document.getElementById('upi-80g-button');
const closeQrModal = document.getElementById('close-qr-modal');
const close80gQrModal = document.getElementById('close-80g-qr-modal');

// Open the donation modal
donateBtn.addEventListener('click', () => {
  donationModal.style.display = 'block';
});

// Close the donation modal
closeDonationModal.addEventListener('click', () => {
  donationModal.style.display = 'none';
});

// Open the UPI Phone Pay QR Modal
upiQrButton.addEventListener('click', () => {
  donationModal.style.display = 'none';
  qrModal.style.display = 'block';
});

// Open the UPI with 80G QR Modal
upi80gButton.addEventListener('click', () => {
  donationModal.style.display = 'none';
  qr80gModal.style.display = 'block';
});

// Close the UPI QR Modal
closeQrModal.addEventListener('click', () => {
  qrModal.style.display = 'none';
});

// Close the 80G QR Modal
close80gQrModal.addEventListener('click', () => {
  qr80gModal.style.display = 'none';
});

// Close modals when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === donationModal) donationModal.style.display = 'none';
  if (event.target === qrModal) qrModal.style.display = 'none';
  if (event.target === qr80gModal) qr80gModal.style.display = 'none';
});

