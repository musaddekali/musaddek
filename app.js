const navToggleBtn = document.querySelector('.nav-menu-toggler');
const navLinkContainer = document.querySelector('.nav-menu-list');
const navLinks = document.querySelectorAll('.nav-menu-list .nav-a');

// Toggle navigation menu and toggle btn.
const toggleNavMenu = () => {
    if (navToggleBtn.classList.contains('active')) {
        navToggleBtn.classList.remove('active');
        navLinkContainer.classList.remove('open');
    } else {
        navToggleBtn.classList.add('active');
        navLinkContainer.classList.add('open');
    }
}

// Hide mobile nav when any link click
navLinks.forEach(item => {
    item.addEventListener('click', () => {
        toggleNavMenu();
    });
});
