(function($) {
    'use strict';

    // All JavaScript pluging initialization code here

    $(".main-menu-expand").niceScroll({
        cursorcolor:"#d6b161"
    });

    // Expand Menu Slide
    var ci = $('.close-icon');
    var mme = $('.main-menu-expand');
    var emb = $('.expand-menu-bar');
    ci.on('click', function() {
        $(this).parents(mme).removeClass('slide_right');
    });
    emb.on('click', function() {
        ci.parents(mme).addClass('slide_right');
    });

    $('.main-menu li.sub-item > a').on('click', function(e) {
        e.preventDefault();
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(200);
        } else {
            element.addClass('open');
            element.children('ul').slideDown(200);
            element.siblings('li').children('ul').slideUp(200);
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(200);
        }
    });

    // Portfolio hover efeect
    $('#da-thumbs > .portfolio-item').hoverdir();

    // Portfolio section 
    $('.portfolio-section').imagesLoaded(function() {
        // Portfolio activation
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
        });

        // Portfolio filtering activation
        $('.portfolio-filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // filter menu class addition  
        $('.portfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // LOAD MORE BUTTON FOR PORTFOLIO
        $('.pagination-area').on('click', '.load-more', function(event) {
            $('.portfolio-item').removeClass('hidden');
            var $grid = $('.portfolio-grid').isotope();
            $(this).hide();
            $('.pagination-area .load-more-wrapper').append('<a class="button btn-white-left btn-white-bg" href="javascript:void(0)">No More Items</a>')
            event.preventDefault();
        });
    });

    /* ---------------------------------------------
     MASONRY STYLE BLOG.
    ------------------------------------------------ */
    var $blogContainer = $('.blog-masonry');
    if ($.fn.imagesLoaded && $blogContainer.length > 0) {
        imagesLoaded($blogContainer, function() {
            setTimeout(function() {
                $blogContainer.isotope({
                    itemSelector: '.post-grid-item',
                    layoutMode: 'masonry'
                });
            }, 500);

        });
    }

    /*------------------------------------------------
     Magnific pop-up for video gallery section
    -------------------------------------------------- */
    $('.vendorx-gallery').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });

    /*------------------------------------------------
     Magnific pop-up for video gallery section
    -------------------------------------------------- */
    $('.post-thumbnail a').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });

    /*------------------------------------------------
     Magnific pop-up for video gallery section
    -------------------------------------------------- */
    $('.portfolio-thumbnail-wrapper a').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });


    /* ---------------------------------------------
     Single Post Slide
    --------------------------------------------- */
    $('.post-thumbnail').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        loop: true,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        easing: 'linear'
    });

    /* ---------------------------------------------
     SIngle Portfolio Slide
    --------------------------------------------- */
    $('.portfolio-thumbnail-wrapper').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        loop: true,
        infinite: true,
        slidesToShow: 1,
        fade: true,
        easing: 'linear'
    });


    /* ---------------------------------------------
     Slider area
    --------------------------------------------- */
    $(".slide-navigation").slick({
        autoplay: false,
        speed: 1000,
        autoplayspeed: 10000,
        dots: false,
        arrows: true,
        fade: true,
        easing: 'linear',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1169,
                settings: {
                    dots: true,
                    arrows: false
                }
        }]
    });


    /* ---------------------------------------------
     counter activation
    --------------------------------------------- */
    $('.counter').counter();

    // WoW JS Activation
    var wowInit = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        scrollContainer: null
    });
    wowInit.init();

    /* ---------------------------------------------
     Back to Top
    --------------------------------------------- */
    $('body').append('<a id="back-to-top" class="to-top-btn" href="#"><i class="fa fa-angle-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('to-top-show');
                } else {
                    $('#back-to-top').removeClass('to-top-show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1250, 'easeInOutExpo');
        });
    };



})(jQuery)