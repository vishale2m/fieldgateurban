$(document).ready(function () {
    $(window).on('load', function () {
        $('.hero-banner .banner-image').addClass('active');
    });

    $('.toggle-menu').click(function () {
        $(this).toggleClass('toggle-active');
        $('.navbar .menu').toggleClass('menu-nav');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.site-header').addClass('active-header');
        } else {
            $('.site-header').removeClass('active-header');
        }
    
        const scrollTop = $(window).scrollTop();
        const whoWeAreTop = $('.who-we-are').offset().top;
        const ourBeliefTop = $('.ourBelief').offset().top;
    
        if (scrollTop >= whoWeAreTop && scrollTop < ourBeliefTop) {
            $('.site-header').addClass('black-header');
        } else {
            $('.site-header').removeClass('black-header');
        }
    });
    

    gsap.registerPlugin(ScrollTrigger);

    gsap.to("body", {
        scrollTrigger: {
            trigger: '.who-we-are',
            start: 'top bottom', 
            end: '50% bottom',
            scrub: 1,
            // markers: true,
            immediateRender: false,
            overwrite: 'auto'
        },
        backgroundColor: 'white',
        color: 'black',
    });

    gsap.to("body", {
        scrollTrigger: {
            trigger: '.ourBelief',
            start: '30% bottom', 
            end: '100% bottom',
            scrub: 1,
            // markers: true,
            immediateRender: false,
            overwrite: 'auto'
        },
        backgroundColor: 'black',
        color: 'white',
    });

    gsap.to(".moveimg1", {
        scrollTrigger: {
            trigger: '.ourBelief',
            start: '80% bottom', 
            end: '90% bottom',
            scrub: 1,
            // markers: true,
        },
        y: -100,
    });

    gsap.to(".moveimg2", {
        scrollTrigger: {
            trigger: '.ourBelief',
            start: '50% bottom', 
            end: '80% bottom',
            scrub: 1,
            // markers: true,
        },
        y: -100,
    });

    gsap.to(".moveimg3", {
        scrollTrigger: {
            trigger: '.ourBelief',
            start: '50% bottom', 
            end: '80% bottom',
            scrub: 1,
            // markers: true,
        },
        y: -500,
    });
});
