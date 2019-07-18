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

    var mySwiper = window.matchMedia("(min-width: 640px)")
    new Swiper('.swiper-container', {
        autoplay: {
            loop: 'true',
            delay: 2000,
            disableOnInteraction: 'true',
        },
    });