// 1. ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА SWIPER
const swiper = new Swiper('.reviewSwiper', {
    loop: true,
    speed: 800,
    spaceBetween: 20,
    grabCursor: true, // Курсор "рука" на ПК
    
    // Кнопки навигации
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },

    // Настройки для свайпа пальцем
    touchRatio: 1.5, // Чувствительность свайпа
    touchAngle: 45, // Угол срабатывания
    simulateTouch: true,
});

// 2. АНИМАЦИЯ ПРИ СКРОЛЛЕ (SCROLL REVEAL)
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Когда блок появляется на экране, добавляем класс is-visible
                entry.target.classList.add('is-visible');
            }
        });
    }, { 
        threshold: 0.1 // Анимация срабатывает, когда на экране появилось 10% блока
    });

    // Находим все элементы с классом reveal и начинаем за ними следить
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
