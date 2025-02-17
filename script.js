document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });

    // Button hover effect
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.2s ease-in-out";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
});
