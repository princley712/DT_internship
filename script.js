// Toggle Dashboard
function togglejourney() {
  const dashboard = document.getElementById('journey-dashboard');
  dashboard.classList.toggle('open');
}
// Function to toggle the Notification Dashboard
function togglenotification() {
  const dashboard = document.getElementById("notification-dashboard");
  
  // Toggle the "open" class
  if (dashboard.classList.contains("open")) {
    dashboard.classList.remove("open");
  } else {
    dashboard.classList.add("open");
  }
}


const seeMoreButtons = document.querySelectorAll('.see-more');

seeMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const section = button.closest('.section');
    const fullText = section.querySelector('p').textContent; 

    if (button.textContent === 'See More') {
      section.querySelector('p').innerHTML = fullText;
      button.textContent = 'See Less';
    } else {
      // Shorten the text (e.g., show first 100 characters)
      const shortText = fullText.substring(0, 100) + '...';
      section.querySelector('p').innerHTML = shortText;
      button.textContent = 'See More';
    }
  });
});