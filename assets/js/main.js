document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('mouseenter', function () {
        const category = this.getAttribute('data-category');
        const slider = this.closest('.cart').querySelector('.slider');
        
        // Скрываем все слайды
        slider.querySelectorAll('.slide').forEach(slide => {
            slide.classList.remove('active');
        });

        // Показываем нужный
        slider.querySelector(`.slide[data-category="${category}"]`).classList.add('active');
    });

    // Опционально: вернуть первое изображение при уходе курсора
    link.addEventListener('mouseleave', function () {
        const slider = this.closest('.cart').querySelector('.slider');
        slider.querySelector('.slide:first-child').classList.add('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.slider-track');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    
    const itemWidth = 130 + 15; // ширина + gap
    const visibleItems = 6;
    const totalItems = document.querySelectorAll('.brand-item').length;
    const maxIndex = Math.max(0, totalItems - visibleItems);

    let currentIndex = 0;

    btnNext.addEventListener('click', function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    btnPrev.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    function updateSlider() {
        const offset = -currentIndex * itemWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    // Инициализация
    updateSlider();
});