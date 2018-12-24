var width = window.innerWidth;
var height = window.innerHeight;
// console.log(width, height);
var a =$( '.main' ).height();
console.log(a);

// for mobile
$('.hide').hide();
$('.hide_menu').hide();
$('.borderNav').hide();


window.addEventListener('scroll', function (e) {
    e.preventDefault();
    let lastPosition = window.scrollY;

    if(lastPosition > 50){
        $('.heading-primary').fadeOut();
        $('.header__logo').fadeOut();
        $('.borderNav').fadeIn();
        if(lastPosition<height){
            $('.hide').fadeIn();
        }
    }else if (lastPosition < 50){
        $('.heading-primary').fadeIn();
        $('.header__logo').fadeIn();
        $('.hide').fadeOut();
        $('.borderNav').fadeOut();

    }
    console.log(lastPosition);
});



// for both



window.addEventListener('scroll', function (e) {
    let lastPosition = window.scrollY
    if(lastPosition>height+3.5){

        if (width <= 600) {  
            document.getElementById('main').style.backgroundAttachment = 'fixed';
            $('.hide_menu').fadeIn();
            $('.hide').hide();
        }

    }else if(lastPosition < height){
        if (width <= 600) {  
            document.getElementById('main').style.backgroundAttachment = 'scroll';
            $('.hide_menu').fadeOut();
        }
    }

});



// $('#main').css(backgroundAttachment,'fixed');
// if(lastPosition>height){
//     console.log(lastPosition,height);
//     document.getElementById('space').style.zIndex = '1';
//     document.getElementById('main').style.backgroundAttachment = 'scroll';
//     $('.main').css('position:','fixed');
// $( document ).ready(function() {
//  var a =$( '.main' ).height();
// console.log(a);
// });
