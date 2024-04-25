document.addEventListener("DOMContentLoaded", function() {
    // Donation Button Click Event
    document.getElementById("donateButton").addEventListener("click", function() {
        window.location.href = "donation.html";
    });

    // Volunteer Button Click Event
    document.getElementById("volunteerButton").addEventListener("click", function() {
        window.location.href = "volunteer.html";
    });

    // Scholarship Button Click Event
    document.getElementById("scholarshipButton").addEventListener("click", function() {
        window.location.href = "scholarship.html";
    });

    // Use document.querySelectorAll() to select all elements with class "donateButton"
const donateButtons = document.querySelectorAll(".donateButton");

// Loop through each button and attach a click event listener
donateButtons.forEach(button => {
    button.addEventListener("click", function() {
        window.location.href = "donation.html";
    });
});
});
