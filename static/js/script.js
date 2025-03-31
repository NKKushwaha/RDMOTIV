document.addEventListener('DOMContentLoaded', function() {
    const scrollToTop = document.querySelector('.scroll-to-top');
    const progressPath = document.querySelector('.progress-circle-path');
    const pathLength = progressPath.getTotalLength();
    
    progressPath.style.strokeDasharray = pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    
    window.addEventListener('scroll', () => {
        const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const drawLength = pathLength * scrollPercentage;
        progressPath.style.strokeDashoffset = pathLength - drawLength;
    });

    scrollToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Mobile Menu Toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarContent = document.querySelector('.navbar-collapse');

    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            navbarContent.classList.toggle('show');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbarToggler?.contains(e.target) && !navbarContent?.contains(e.target)) {
            navbarContent?.classList.remove('show');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                navbarContent?.classList.remove('show');
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // Add animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Scroll to Top Button
    const scrollTop = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });

    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.style.transform = 'translateY(-100%)';
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.style.transform = 'translateY(0)';
            header.classList.remove('scroll-down');
        }
        lastScroll = currentScroll;
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const progressPath = document.querySelector('.progress-circle-path');
    
    if (scrollToTopBtn && progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = pathLength;
        progressPath.style.strokeDashoffset = pathLength;

        function updateProgress() {
            const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            const drawLength = pathLength * scrollPercentage;
            progressPath.style.strokeDashoffset = pathLength - drawLength;

            if (scrollPercentage > 0.05) { // Show after 5% scroll
                scrollToTopBtn.classList.add('active');
            } else {
                scrollToTopBtn.classList.remove('active');
            }
        }

        // Update on scroll
        window.addEventListener('scroll', updateProgress);

        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Initial check
        updateProgress();
    }

    
});

// Registration Vehicle Number Toggle
function toggleRegistrationNumber() {
    const checkbox = document.getElementById('unregistered-vehicle');
    const registrationNumberInput = document.getElementById('registrationNumber');

    // Disable the input field when the checkbox is checked, and enable it when unchecked
    registrationNumberInput.disabled = checkbox.checked;
}


