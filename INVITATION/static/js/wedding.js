// wedding.js

// Countdown Timer
const countdown = document.getElementById('countdown');
const weddingDate = new Date('2024-12-25T14:00:00').getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdown.innerHTML = "It's Wedding Day!";
        fireworksEffect();
    }
}, 1000);

// Toggle Music
const music = document.getElementById('wedding-song');
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Slideshow Logic
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Reveal Wedding Program
function revealProgram() {
    const program = document.getElementById('program');
    program.style.display = 'block';
}

// Fireworks Effect
function fireworksEffect() {
    const fireworks = new Fireworks.default(document.body, {
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 200,
        trace: 3,
        explosion: 5
    });
    fireworks.start();

    // Stop fireworks after 5 seconds
    setTimeout(() => {
        fireworks.stop();
    }, 5000);
}
