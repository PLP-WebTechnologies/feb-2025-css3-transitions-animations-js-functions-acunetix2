// Get the elements
const animateBox = document.getElementById('animateBox');
const triggerButton = document.getElementById('triggerAnimation');

// Check if animation has been triggered before
if (localStorage.getItem('animationTriggered') === 'true') {
  animateBox.classList.add('animate');
}

// Add event listener to the button
triggerButton.addEventListener('click', () => {
  // Trigger animation and store in localStorage
  animateBox.classList.add('animate');
  localStorage.setItem('animationTriggered', 'true');
});
