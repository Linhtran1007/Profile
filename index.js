// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Create animated particles (rain effect)
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${Math.random() * 20 + 10}px`; // Elongated for raindrop effect
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * -100}px`; // Start above viewport
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 2 + 1.5}s`; // Faster fall
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particlesContainer.appendChild(particle);
    }
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Animated name effect
function createAnimatedName() {
    const titleContainer = document.getElementById('hero-title');
    const text = document.querySelector('.hero h1').textContent;
    const characters = text.split('');
    titleContainer.innerHTML = '';

    const isMobile = window.innerWidth <= 768;
    const maxOffset = isMobile ? 100 : 250;
    const transitionDuration = isMobile ? 0.5 : 0.6;

    characters.forEach((char, index) => {
        const charElement = document.createElement('span');
        charElement.className = 'hero-title-char';
        charElement.textContent = char === ' ' ? '\u00A0' : char;
        charElement.style.transition = `all ${transitionDuration}s ease-out`;
        titleContainer.appendChild(charElement);

        const randomX = (Math.random() - 0.5) * maxOffset;
        const randomY = (Math.random() - 0.5) * maxOffset;
        const randomAngle = Math.random() * 360;
        charElement.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomAngle}deg)`;
        charElement.style.opacity = '0';

        setTimeout(() => {
            charElement.style.transform = 'translate(0, 0) rotate(0deg)';
            charElement.style.opacity = '1';
        }, index * (isMobile ? 150 : 200));
    });
}

window.addEventListener('load', function () {
    createParticles();
    handleScrollAnimations();
    createAnimatedName();
});

window.addEventListener('resize', function () {
    createAnimatedName();
});

window.addEventListener('scroll', handleScrollAnimations);

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
const chatMessages = document.getElementById("chat-messages");

chatIcon.addEventListener("click", () => {
    chatBox.style.display = (chatBox.style.display === "block") ? "none" : "block";
});

document.getElementById("chatForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("chatInput");
    const message = input.value.trim();

    if (message !== "") {
        // Hiển thị tin nhắn người dùng
        const userMsg = document.createElement("div");
        userMsg.className = "message user";
        userMsg.textContent = message;
        chatMessages.appendChild(userMsg);

        // Hiển thị tin nhắn bot (phản hồi)
        setTimeout(() => {
            const botMsg = document.createElement("div");
            botMsg.className = "message bot";
            botMsg.textContent = "🚧 This feature is under development.";
            chatMessages.appendChild(botMsg);

            // Tự động cuộn xuống cuối
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);

        // Clear input
        input.value = "";
    }
});
