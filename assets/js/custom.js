(function ($) {
    //preloader js
    $(window).on('load', function () {
        $('.preloader').fadeOut(5000);
    })




    /*==== Multipage header Section Start here =====*/
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });
    $('.menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (parseInt($(window).width()) < 992) {
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        }


    });

    $('.header-bar').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    })

    //Header
    var fixed_top = $("header");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            fixed_top.addClass("header-fixed fadeInUp");
        } else {
            fixed_top.removeClass("header-fixed fadeInUp");
        }
    });

    /*==== Multipage header Section End here =====*/


    //Animation on Scroll initializing
    AOS.init();


    //Components Preview slider














    //Countdown js initialization
    // document.addEventListener('readystatechange', event => {
    //     if (event.target.readyState === "complete") {
    //         var clockdiv = document.getElementsByClassName("countdown");
    //         var countDownDate = new Array();
    //         for (var i = 0; i < clockdiv.length; i++) {
    //             countDownDate[i] = new Array();
    //             countDownDate[i]['el'] = clockdiv[i];
    //             countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
    //             countDownDate[i]['days'] = 0;
    //             countDownDate[i]['hours'] = 0;
    //             countDownDate[i]['seconds'] = 0;
    //             countDownDate[i]['minutes'] = 0;
    //         }

    //         var countdownfunction = setInterval(function () {
    //             for (var i = 0; i < countDownDate.length; i++) {
    //                 var now = new Date().getTime();
    //                 var distance = countDownDate[i]['time'] - now;
    //                 countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
    //                 countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //                 countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //                 countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

    //                 if (distance < 0) {
    //                     countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = 0;
    //                     countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = 0;
    //                     countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = 0;
    //                     countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = 0;
    //                 } else {
    //                     countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = countDownDate[i]['days'];
    //                     countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = countDownDate[i]['hours'];
    //                     countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = countDownDate[i]['minutes'];
    //                     countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = countDownDate[i]['seconds'];
    //                 }
    //             }
    //         }, 1000);
    //     }
    // });




    //============ Scroll to top js =========
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').css({
                'bottom': '7%',
                'opacity': '1',
                'transition': 'all .5s ease'
            });
        } else {
            $('.scrollToTop').css({
                'bottom': '-30%',
                'opacity': '0',
                'transition': 'all .5s ease'
            })
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });





    // form validation
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })

})(jQuery);






//============ Scroll to top js =========
//Check to see if the window is top if not then display button

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.scrollToTop').css({
            'bottom': '7%',
            'opacity': '1',
            'transition': 'all .5s ease'
        });
    } else {
        $('.scrollToTop').css({
            'bottom': '-30%',
            'opacity': '0',
            'transition': 'all .5s ease'
        })
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});


// =================== header js start here ===================
$("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
// drop down menu width overflow problem fix
$('ul').parent('li').on('hover', function () {
    var menu = $(this).find("ul");
    var menupos = $(menu).offset();
    if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
            left: newpos
        });
    }
});
$('.menu li a').on('click', function (e) {
    var element = $(this).parent('li');
    if (parseInt($(window).width()) < 992) {
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(300, "swing");
        } else {
            element.addClass('open');
            element.children('ul').slideDown(300, "swing");
            element.siblings('li').children('ul').slideUp(300, "swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(300, "swing");
        }
    }


});

$('.header-bar').on('click', function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
})

//Header
var fixed_top = $("header");
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
        fixed_top.addClass("header-fixed fadeInUp");
    } else {
        fixed_top.removeClass("header-fixed fadeInUp");
    }
});





// =================== header js end here ===================



// custom trk js

// component slider here
const Swiper1 = new Swiper('.course__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },

    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-1",
        clickable: true
    },
});

// home 4 course slider
const Swiper4 = new Swiper('.course__slider--style4', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        }
    },

    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-2",
        clickable: true
    },
});

// home 1 testimonial  slider here

var swiperAuthor = new Swiper(".testimonial__author", {
    spaceBetween: 1,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    // clickable: true,
});


const Swiper2 = new Swiper('.testimonial__slider', {
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    speed: 3000,
    thumbs: {
        swiper: swiperAuthor,
    },
});

const studentreview = new Swiper('.studentreview__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
    },
    // autoplay: {
    //     delay: 1,
    //     disableOnInteraction: true,
    // },
    speed: 3000,
});


// home 1 partner  slider here
const Swiper3 = new Swiper('.partner__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
});


// home 2 course category slider
// component slider here
const Swiper5 = new Swiper('.categories__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-1",
        clickable: true
    },
});

// testimonial
const Swiper7 = new Swiper('.testimonial__slider2', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 25,
        }
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-3",
        clickable: true
    },
});



// home 3 slider
// team slider 
const swiper11 = new Swiper('.team__slider1', {
    slidesPerView: 2,
    direction: "vertical",
    grabCursor: true,
    spaceBetween: 24,
    mousewheel: true,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 5000,
});
const swiper12 = new Swiper('.team__slider2', {
    slidesPerView: 2,
    direction: "vertical",
    grabCursor: true,
    spaceBetween: 24,
    mousewheel: true,
    loop: true,
    autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: true,
    },
    speed: 4000,
});

// testimonial
const testimonialSlider3 = new Swiper('.testimonial__slider3', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    speed: 3000,
    thumbs: {
        swiper: testimonialStoryteller,
    },
});

var testimonialStoryteller = new Swiper(".testimonial__storyteller", {
    spaceBetween: 24,
    // slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    // clickable: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    },
});





// blog
const BlogSlider = new Swiper('.blog__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
});




// counter

// function counter(id, start, end, duration) {
//     let element = document.getElementById(id);
//     let range = end - start;
//     let current = start;
//     let increment = end > start ? 1 : -1;
//     let stepTime = Math.abs(Math.floor(duration / range));
//     let timer = setInterval(function () {
//         current += increment; 
//         element.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// counter("counter", 0, 63, 2000);