var width = window.innerWidth;
var height = window.innerHeight;
console.log(width, height);

// for mobile
window.addEventListener('scroll', function (e) {
    // e.preventDefault();
    const lastPosition = window.scrollY

    if(lastPosition > 50){
        $('.heading-primary').fadeOut();
        $('.header__logo').fadeOut();
    }else if (lastPosition < 50){
        $('.heading-primary').fadeIn();
        $('.header__logo').fadeIn();
    }
    console.log(lastPosition);
});


