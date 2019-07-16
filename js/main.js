$(document).ready(function(){
    $('.nav-toggle').on('click', function(e){
        e.preventDefault();
        $('.nav-mobile ul').toggleClass('is-open')
    })
})