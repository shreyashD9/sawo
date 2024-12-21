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
  if (username === 'teamsawo' && password === '123') {
    adminLoginModal.style.display = 'none';
    adminModal.style.display = 'block';
  } else {
    alert('Invalid username or password');
  }
});

// Handle Update Date Form Submission
const updateDateForm = document.getElementById('update-date-form');
const newDateInput = document.getElementById('new-date');
const nextDateElement = document.querySelector('.abc-date'); // Updated to match new class for date display
const abcNoteElement = document.querySelector('.abc-note'); // The element for the "Mark your calendars!" note

updateDateForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the new date from the input
  const newDate = newDateInput.value;

  // Validate and update the next ABC Drive date
  if (newDate) {
    // Update the date display
    nextDateElement.textContent = newDate;

    // Update the note dynamically to encourage engagement
    abcNoteElement.textContent = `Get ready for the next drive on ${newDate}!`;

    alert('Date updated successfully!');

    // Close the Admin Modal
    document.getElementById('adminModal').style.display = 'none';

    // Optionally clear the input field
    newDateInput.value = '';
  } else {
    alert('Please select a valid date.');
  }
});

// Slots management
const slotsCountElement = document.getElementById('slots-count'); // Display slot count
const slotsNumberInput = document.getElementById('slots-number'); // Admin input field
const updateSlotsForm = document.getElementById('update-slots-form'); // Admin slots form

// Initialize slots (default or from a backend service)
let remainingSlots = 20;

// Populate slots input with the current value
slotsNumberInput.value = remainingSlots;

// Update slots dynamically
updateSlotsForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  
  const updatedSlots = parseInt(slotsNumberInput.value, 10);
  if (!isNaN(updatedSlots) && updatedSlots >= 0) {
    remainingSlots = updatedSlots;
    slotsCountElement.textContent = remainingSlots; // Update display
    alert(`Slots updated successfully to ${remainingSlots}`);
  } else {
    alert('Please enter a valid number of slots!');
  }
});




let selectedAchievementId = ""; // To store the id of the achievement being updated

// Function to open the modal and set the selected achievement
function openModal(achievementId) {
  selectedAchievementId = achievementId;
  const currentValue = document.getElementById(achievementId).textContent;
  document.getElementById("new-value").value = currentValue; // Set the current value in the input
  document.getElementById("update-modal").style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
  document.getElementById("update-modal").style.display = "none";
}

// Function to save the updated achievement value
function updateAchievement() {
  const newValue = document.getElementById("new-value").value;
  if (newValue && !isNaN(newValue)) {
    document.getElementById(selectedAchievementId).textContent = newValue; // Update the value in the card
    closeModal(); // Close the modal
    alert("Achievement updated successfully!");
  } else {
    alert("Please enter a valid number.");
  }
}

// donation modal
/// Elements for Donation Modal
const donateBtn = document.querySelector('.nav-buttons .light');
const donationModal = document.getElementById('donation-modal');
const closeDonationModal = document.getElementById('close-donation-modal');

// Elements for QR Modal
const qrModal = document.getElementById('qr-modal');
const upiQrButton = document.getElementById('upi-qr-button');
const closeQrModal = document.getElementById('close-qr-modal');

// Open Donation Modal
donateBtn.addEventListener('click', () => {
  donationModal.style.display = 'block';
});

// Close Donation Modal
closeDonationModal.addEventListener('click', () => {
  donationModal.style.display = 'none';
});

// Open QR Modal when UPI Button is clicked
upiQrButton.addEventListener('click', () => {
  donationModal.style.display = 'none'; // Close the Donation Modal
  qrModal.style.display = 'block';
});

// Close QR Modal
closeQrModal.addEventListener('click', () => {
  qrModal.style.display = 'none';
});

// Close Modal on outside click
window.addEventListener('click', (event) => {
  if (event.target === donationModal) {
    donationModal.style.display = 'none';
  }
  if (event.target === qrModal) {
    qrModal.style.display = 'none';
  }
});
