// --- Testimonial Carousel Logic (Updated for Auto-Slide) ---
{
    const feedbackCarousel = document.getElementById('feedback-carousel');
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    const indicators = Array.from(document.querySelectorAll('.indicator'));

    if (feedbackCarousel && track && slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;
        let slideInterval;
        const SLIDE_DURATION = 5000; // Auto-slide every 5 seconds

        // Function to update the carousel's position and indicators
        const updateCarousel = () => {
            // Translate the entire track
            const offset = -currentIndex * 100;
            track.style.transform = `translateX(${offset}%)`;

            // Update indicators (guard)
            if (indicators && indicators.length) {
                indicators.forEach((indicator, index) => {
                    indicator.classList.remove('active');
                    if (index === currentIndex) {
                        indicator.classList.add('active');
                    }
                });
            }
        };

        // Function to advance to the next slide
        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        };

        // Function to start the automatic slide interval
        const startAutoSlide = () => {
            pauseAutoSlide(); // Clear any existing timer
            slideInterval = setInterval(nextSlide, SLIDE_DURATION);
        };

        // Function to pause the automatic slide
        const pauseAutoSlide = () => {
            clearInterval(slideInterval);
        };

        // Next/Prev buttons (guarded)
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                pauseAutoSlide();
                nextSlide();
                startAutoSlide();
            });
        }
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                pauseAutoSlide();
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
                startAutoSlide();
            });
        }

        // Indicator navigation - now includes pause/resume logic
        if (indicators && indicators.length) {
            indicators.forEach(indicator => {
                indicator.addEventListener('click', (e) => {
                    pauseAutoSlide();
                    const slideTo = parseInt(e.target.getAttribute('data-slide-to'));
                    if (!Number.isNaN(slideTo)) {
                        currentIndex = slideTo;
                        updateCarousel();
                        startAutoSlide();
                    }
                });
            });
        }

        // Pause and resume on hover for user readability (guard)
        if (feedbackCarousel) {
            feedbackCarousel.addEventListener('mouseenter', pauseAutoSlide);
            feedbackCarousel.addEventListener('mouseleave', startAutoSlide);
        }

        // Initialize carousel on load and start the auto slide
        updateCarousel();
        startAutoSlide();
    }
}