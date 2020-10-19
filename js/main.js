$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// Scroll To Top Button 
var scrollButton = $(".scroll-top");
$(window).scroll(function() {
    ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
});
// Click Button to scroll top 
scrollButton.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 600);
});


var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();



$(document).ready(function() {


    // This is To Open Mega Menu 
    $(".terms .nav-list .mega-big-box").click(function() {
        $(".overlay-box2").slideDown(300);
    });

    $(".overlay-box2,.terms .nav-list .mega-big-box").click(function() {
        $(".mega-big-box .arrow").toggleClass("rotate");
        $(".mega-menu").slideToggle(500);
        $(".overlay-box2").slideUp(500);
    });

    // $(".overlay-box2").click(function() {
    //     $(".overlay-box2").slideUp(500);
    // });

    // $(".overlay-box2").click(function() {
    //     $(".mega-big-box .arrow").removeClass("rotate");
    //     $(".mega-menu").fadeOut(300);
    // });


    // This is To Open Account in Side Menu 
    $(".mo-nav .nav-list .account").click(function() {
        $(".mo-nav .account .nav-link").toggleClass("rotate");
        $(".mo-nav .config-top").slideToggle(300);
    });


    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 30,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            }
        }
    });


    $('.bestsellers .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 0,
        // stagePadding: 10,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            520: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 2,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });


    $('.sub-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        stagePadding: 10,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            500: {
                items: 2,
                dots: true,
                margin: 20,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 3,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });


    $(".video").fancybox({
        // Options will go here
    });


    $('.insta-gallary .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        stagePadding: 10,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });

    $('.brands .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 4,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 5,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                dots: false,
                loop: true
            },
            1510: {
                items: 6,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });


    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        stagePadding: 10,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 2,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });

    //This is To make faetures as slider in small screens
    if ($(window).width() <= 991) {
        $(".features .features-box").addClass("owl-carousel owl-theme");
        $(".features-box .feature").removeClass("owl-carousel");
        $('.features .owl-carousel').owlCarousel({
            loop: false,
            margin: 20,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: false
                },
                500: {
                    items: 2,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".features-box .feature").removeClass("owl-carousel");
        $(".features-box .feature").removeClass("owl-carousel");
    };


    // To Toggle Between Footer Slide Menus
    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }

    //This is To Change between footer collapse link ----------------------------------------------------------------
    // First Collapse ---------------------------
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading .footer-link").addClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading .footer-link").removeClass("rotate")
        }
    });

    // Second Collapse ---------------------------
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading .footer-link").removeClass("rotate")
        }
    });

    // Third Collapse ---------------------------
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("collapse")) {
            $(".third .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("in")) {
            $(".third .footer-heading .footer-link").removeClass("rotate")
        }
    });

    // Last Collapse ---------------------------
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading .footer-link").addClass("rotate")
            $(".first .footer-heading .footer-link").removeClass("rotate")
            $(".second .footer-heading .footer-link").removeClass("rotate")
            $(".third .footer-heading .footer-link").removeClass("rotate")
        }
    });
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading .footer-link").removeClass("rotate")
        }
    });


    // This is To Open Hidden Banner 
    $(".terms .nav-list .offers").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box").slideDown(300);
    });

    $(".terms .nav-list .offers").click(function() {
        $(".banner").fadeIn(500);
    });

    $(".close-banner,.overlay-box").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box").slideUp(500);
    });

    $(".close-banner,.overlay-box").click(function() {
        $(".banner").fadeOut(300);
    });

    //This is to Open Side Menu
    $(".terms .menu .menu-icon").click(function() {
        $("body").addClass("overflow");
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").slideDown(500);
    });

    $(".close").click(function() {
        $("body").removeClass("overflow");
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").slideUp(500);
    });


    // This is To Open search Box
    $(".terms .search .search-icon").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box4").slideDown(500);
    });

    $(".terms .search .search-icon").click(function() {
        $(".search .search-icon").removeClass("open-search")
        $(".search .search-icon").addClass("close-search")
        $(".close-search-btn").fadeIn(300)
        $(".terms .search-box").fadeIn(300);
    });

    $(".close-search-btn,.overlay-box4").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box4").slideUp(500);
    });

    $(".close-search-btn,.overlay-box4").click(function() {
        $(".search .search-icon").addClass("open-search")
        $(".search .search-icon").removeClass("close-search")
        $(".close-search-btn").fadeOut(500)
        $(".terms .search-box").fadeOut(500);
    });

});