
// Toggle show dropdown menu desktop
$( ".menutoggle" ).click(function() {
    $( ".dropdown" ).toggle( "fast" );
});

// toggle menu sidebar
$('.sidebar li').click(function(){
    $(this).children('ul').slideToggle(400);
});

// active sidebar
$('.mb-togggle').click(function() {
    $('.navbar-fixed-fill').addClass('active');
    $('.navbar-fixed').addClass('open');
});

$('body').on('click', '.navbar__close', function() {
    $('.navbar-fixed-fill').removeClass('active');
    $('.navbar-fixed').removeClass('open');
});

// show modal automation
$('#popup').show();

// show popup
window.addEventListener("load", function() {
    var popup_cookie = document.cookie;
    if(popup_cookie == '') {
        this.setTimeout(function() {
            $(".popup__overlay").removeClass('hidden');
        }, 5000);
    }
});
// close popup
$('body').on('click', '.popup__close', function() {
    document.cookie = "disable_popup=true";
    $(".popup__overlay").addClass('hidden');
});

// owl Carousel
$(document).ready(function(){
    $('.owl-prod-slide').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:["<img src='./assets/dist/img/icon/chevron-left.png' alt='chevron-left.png' />","<img src='./assets/dist/img/icon/chevron-right.png' alt='chevron-right.png' />"],
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});
$(document).ready(function(){
    $('.owl-brand').owlCarousel({
        margin:10,
        nav:false,
        navText:["<img src='./assets/dist/img/icon/chevron-left.png' alt='chevron-left.png' />","<img src='./assets/dist/img/icon/chevron-right.png' alt='chevron-right.png' />"],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })
});