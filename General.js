
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            let diff = (index - currentIndex + slides.length) % slides.length;


            if (diff === 0) {
                slide.style.transform = "translateX(-490px) scale(0.85)";
                slide.style.opacity = "0.6";
                slide.style.zIndex = "1";
            } else if (diff === 1) {
                slide.style.transform = "translateX(0) scale(1)";
                slide.style.opacity = "1";
                slide.style.zIndex = "2";
            } else if (diff === 2) {
                slide.style.transform = "translateX(490px) scale(0.85)";
                slide.style.opacity = "0.6";
                slide.style.zIndex = "1";
            } else {
                slide.style.opacity = "0";
                slide.style.transform = "translateX(0) scale(0.85)";
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    }

    updateSlides();

    function redirectToPage(url) {
        window.location.href = url;
    }
    