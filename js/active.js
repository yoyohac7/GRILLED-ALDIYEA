

    if ($.fn.owlCarousel) {
        // Hero Slider Active Code
        $(".caviar-hero-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 0,
            nav: true,
            navText: ['', '<i class="fa fa-arrow-right" aria-hidden="true"></i>']
        })
        var wel_slides = $('.caviar-hero-slides');
        wel_slides.owlCarousel();
        wel_slides.on('translate.owl.carousel', function (event) {
            $('.hero-content h2').removeClass('animated').hide();
            $('.hero-content p').removeClass('animated').hide();
            $('.hero-content .btn').removeClass('animated').hide();
            $('.hero-slides-nav, .caviar-hero-area .owl-next').removeClass('animated').hide();
        })
        wel_slides.on('translated.owl.carousel', function (event) {
            $('.hero-content h2').addClass('animated fadeIn').show();
            $('.hero-content p').addClass('animated fadeIn').show();
            $('.hero-content .btn').addClass('animated fadeIn').show();
            $('.hero-slides-nav, .caviar-hero-area .owl-next').addClass('animated fadeInUp').show();
        })
        // Testimonials Slider Active Code
        $(".caviar-testimonials-slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 0,
            rtl:true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }
        })
        // Menu Slider Active Code
        $(".caviar-menu-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 12000,
            margin: 0,
            nav: true,
            navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>']
        })
    }


