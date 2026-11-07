
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

// Open and close mobile navigation
menuToggle.addEventListener("click", function () {
    nav.classList.toggle("open");
});

// Close navigation after clicking a link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
    });
});
