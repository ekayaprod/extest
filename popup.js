// Simple script to show browser info
document.addEventListener('DOMContentLoaded', function() {
  const browserInfo = document.getElementById('browser-info');
  
  // Detect browser
  const userAgent = navigator.userAgent;
  let browser = 'Unknown';
  
  if (userAgent.includes('Edg/')) {
    browser = 'Microsoft Edge';
  } else if (userAgent.includes('Chrome/')) {
    browser = 'Google Chrome';
  } else if (userAgent.includes('Firefox/')) {
    browser = 'Mozilla Firefox';
  }
  
  browserInfo.textContent = `Browser: ${browser}`;
});
