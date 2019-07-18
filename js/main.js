$(document).ready(function(){
    $('.nav-toggle').on('click', function(e){
        e.preventDefault();
        $('.nav-mobile ul').toggleClass('is-open')
    })
})

    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    var mySwiper = document.querySelector('.swiper-container').swiper
        mySwiper.autoplay.stop();

    var mySwiper = window.matchMedia("(min-width: 640px)")
    new Swiper('.swiper-container', {
        autoplay: {
            loop: 'true',
            delay: 3000,
            disableOnInteraction: 'true',
        },
    });