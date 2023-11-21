document.addEventListener("DOMContentLoaded", function () {
    // Set the target date and time (November 30th, replace with your desired date and time)
    var targetDate = new Date('November 30, 2023 00:00:00 GMT-0400');

    // Calculate the time remaining
    var timeRemaining = Math.max(0, targetDate.getTime() - new Date().getTime());

    // Example countdown initialization using FlipClock.js
    var countdown = new FlipClock(document.getElementById('countdown'), timeRemaining / 1000, {
        countdown: true,
        clockFace: 'DailyCounter',
        showSeconds: true,
        callbacks: {
            stop: function () {

                alert('Countdown reached zero!');
            }
        }
    });

});

function sendEmail() {
    var emailInput = document.querySelector('.email-input');
    var placeholderText;

    if (isValidEmail(emailInput.value)) {
        placeholderText = 'Success';
        emailInput.value = ''; // Clear the text box if it's a valid email
    } else {
        placeholderText = 'Invalid email';
    }

    emailInput.placeholder = placeholderText;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

