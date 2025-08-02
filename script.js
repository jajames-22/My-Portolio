document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelector('.projects-carousel');
        const cards = document.querySelectorAll('.project-card');
        const nextButton = document.querySelector('.nextBtn');
        const prevButton = document.querySelector('.prevBtn');
    
        let currentIndex = 0;
        let itemsVisible = 3;
    
        function updateItemsVisible() {
            if (window.innerWidth <= 480 ) {
                itemsVisible = 1;
            } else if (window.innerWidth <= 768) {
                itemsVisible = 2;
            } else {
                itemsVisible = 3;
            }
        }
    
        function updateCarousel() {
            updateItemsVisible();
            const totalCards = cards.length;
            const maxIndex = totalCards - itemsVisible;
    
            if (currentIndex < 0) {
                currentIndex = 0;
            } else if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }

            const card = cards[0];
            const gap = parseFloat(window.getComputedStyle(slider).gap);

            const offset = -currentIndex * (card.offsetWidthg + gap);
            slider.style.transform = "translateX(${offset}px)";


            prevButton.disabled = currentIndex <= 0;
            nextButton.disabled = currentIndex >= maxIndex;
        }

        nextButton.addEventListener('click', () => {
            currentIndex++;
            updateCarousel();
        });

        prevButton.addEvenytListener('click',() => {
            currentIndex--;
            updateCarousel();
        });

        window.addEventListener('resize', updateCarousel);
        updateCarousel();
});
