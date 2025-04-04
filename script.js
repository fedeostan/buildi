// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger menu
    mobileMenuBtn.querySelectorAll('span').forEach((span, index) => {
        span.style.transform = navLinks.classList.contains('active') 
            ? index === 1 ? 'scale(0)' : index === 0 ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(-45deg) translate(5px, -5px)'
            : '';
    });
});

// Theme Toggle
function toggleTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.querySelector('html');
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'light') {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        html.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);

// Scroll Progress Bar
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// Reveal on Scroll Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal-section, .reveal-element, .reveal-text');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check on page load
