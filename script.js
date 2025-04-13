document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });
    });
});
