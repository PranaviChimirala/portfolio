function toggleNav() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}

function resetNav() {
    var navLinks = document.getElementById("nav-links");
    if (window.innerWidth > 768) {
        navLinks.style.display = "flex";
    }
}

// Add event listener for window resize
window.addEventListener("resize", resetNav);


const phrases = [
    "a student",
    "a Web Developer",
    "a cybersecurity enthusiast",
];

function typewriter(element, text, delay) {
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                element.textContent = ""; // Clear the text
                typewriter(element, phrases[(phrases.indexOf(text) + 1) % phrases.length], delay); // Move to the next phrase
            }, 1000); // Wait for 1 second before moving to the next phrase
        }
    }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
    const wordElement = document.getElementById("word");
    typewriter(wordElement, phrases[0], 100);
});

function initTilt() {
    $('[data-tilt]').tilt();
}

// Function to be called when the document is ready
$(document).ready(function () {
    // Call the initTilt function to initialize Tilt.js
    initTilt();
});

