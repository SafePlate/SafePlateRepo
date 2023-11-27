// clock
document.addEventListener("DOMContentLoaded", function () {
    var targetDate = new Date('December 30, 2023 00:00:00 GMT-0400');

    var timeRemaining = Math.max(0, targetDate.getTime() - new Date().getTime());

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

// email
function sendEmail() {
    var emailInput = document.querySelector('.email-input');
    var placeholderText;

    if (isValidEmail(emailInput.value)) {
        placeholderText = 'Success';
        emailInput.value = '';
    } else {
        placeholderText = 'Invalid email';
        emailInput.value = '';
    }

    emailInput.placeholder = placeholderText;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// scroll for home page
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $('.icon-home').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.slide').offset().top
        }, 1000);
    });

    $('.icon-crisis_alert').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.slide2').offset().top
        }, 1000); 
    });

    $('.icon-star').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.slide4').offset().top
        }, 1000);
    });

    $('.icon-call').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.slide5').offset().top
        }, 1000);
    });
});




// scrool for footer
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            let targetElement;

            if (targetId === 'home') {
                targetElement = document.querySelector('.slide');
            } else if (targetId === 'services') {
                targetElement = document.querySelector('.slide2');
            } else if (targetId === 'values') {
                targetElement = document.querySelector('.slide4');
            } else if (targetId === 'contact') {
                targetElement = document.querySelector('.slide5');
            } else {
                targetElement = document.getElementById(targetId);
            }

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});




