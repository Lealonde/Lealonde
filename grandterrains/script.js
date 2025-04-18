// Togglable menu logic for mobile screens
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});