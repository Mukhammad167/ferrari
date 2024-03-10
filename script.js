let condition = true;
let start = 0;
let end = 0;

function forward() {
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutQuad',
        direction:'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets:'.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false
    });
    
    anime({
        targets:'.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false
    });

    condition = false;
}

function backward(){
        anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction:'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets:'.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false
    });
    
    anime({
        targets:'.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false
    });

    condition = true;
}



$('.menu_small_icon').click(function(){
    if (condition){
        forward()
    }
    else{
        backward()
    }
});


$('.container').on('touchstart', function (event){
        event.originalEvent.touches[0].pageX;
})
$('.container').on('touchend', function (event){
    event.originalEvent.changedTouches[0].pageX;
})

