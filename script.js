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
