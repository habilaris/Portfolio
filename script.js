<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Define the toggleMode function
    function toggleMode() {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");

        // Get the logo element
        const logo = document.querySelector("#theme-toggle img");

        // Toggle the dark-mode-logo class based on the body's dark mode class
        if (document.body.classList.contains("dark-mode")) {
            logo.classList.add("dark-mode-logo");
        } else {
            logo.classList.remove("dark-mode-logo");
        }
    }

    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", toggleMode);

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');

    function animateSkillBars() {
        skillBars.forEach(skillBar => {
            const percent = skillBar.getAttribute('data-percent');
            skillBar.style.width = percent + '%';
        });
    }

    // Check if the skill bars are in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Handle scroll event
    function handleScroll() {
        skillBars.forEach(skillBar => {
            if (isElementInViewport(skillBar)) {
                animateSkillBars();
            }
        });
    }

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check on page load
    handleScroll();

    const menuButton = document.querySelector('.menu-button');
    const menuNavLinks = document.querySelector('.nav-links'); // Changed variable name to avoid redeclaration

    menuButton.addEventListener('click', () => {
        menuNavLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
});

=======
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Define the toggleMode function
    function toggleMode() {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");

        // Get the logo element
        const logo = document.querySelector("#theme-toggle img");

        // Toggle the dark-mode-logo class based on the body's dark mode class
        if (document.body.classList.contains("dark-mode")) {
            logo.classList.add("dark-mode-logo");
        } else {
            logo.classList.remove("dark-mode-logo");
        }
    }

    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", toggleMode);

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');

    function animateSkillBars() {
        skillBars.forEach(skillBar => {
            const percent = skillBar.getAttribute('data-percent');
            skillBar.style.width = percent + '%';
        });
    }

    // Check if the skill bars are in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Handle scroll event
    function handleScroll() {
        skillBars.forEach(skillBar => {
            if (isElementInViewport(skillBar)) {
                animateSkillBars();
            }
        });
    }

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check on page load
    handleScroll();

    const menuButton = document.querySelector('.menu-button');
    const menuNavLinks = document.querySelector('.nav-links'); // Changed variable name to avoid redeclaration

    menuButton.addEventListener('click', () => {
        menuNavLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
    });
});

>>>>>>> cc43f772fb957d429c0680725126ec44cb1c5dc1
