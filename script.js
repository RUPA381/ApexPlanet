// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Add click event to Explore button
document.getElementById('explore-btn').addEventListener('click', function() {
    // Show confirmation message
    const confirmed = confirm("You are about to leave this page and go to W3Schools. Do you want to continue?");
    
    // If user confirms, redirect to W3Schools
    if (confirmed) {
        window.location.href = "https://www.w3schools.com/html/";
    }
});