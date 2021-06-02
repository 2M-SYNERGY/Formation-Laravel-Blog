/*
Theme Name: Feello HTML5 Template
Theme URI: 
Desing by: RT Suvro
Developed by: Abdullah Al Numan 
Author: 
Version: 1.0
License: 
Tags: 
*/

(function($) {
    "use strict";
    queryloader2()
    manuBar()
    bgImg()
    banner()
    postShare()
    postSlide()
    rPost()
    bottomTop()

    /*====== Active Plugins ======

        1 Queryloader2

        2 Manu Bar
		
        3 Bg Img
        
        4 Banner

        5 post Share

        6 Post Slide

        7 R Post

		8 Bottom Top

    =============================*/

    /*=====================
        1 Queryloader2
    =======================*/
    function queryloader2() {
        "use strict";
        window.addEventListener('DOMContentLoaded', function() {
            QueryLoader2(document.querySelector("body"), {
                barColor: "#efefef",
                backgroundColor: "#111",
                percentage: true,
                barHeight: 1,
                minimumTime: 200,
                fadeOutTime: 1000
            });
        });
    }

    /*=====================
        2 Manu Bar
    =======================*/

    function manuBar() {
        "use strict";
        $(".manu-bar .main-manu .manu-btn, .title-bar .manu-btn").on("click", function() {
            $(".manu-bar .main-manu .manu-btn").toggleClass("active");
            $(".manu-bar .main-manu .manu-list").toggleClass("active");
            $(".manu-bar .main-manu .overlay").toggleClass("active");
        });
        $(".manu-bar .main-manu .overlay, .manu-bar .main-manu .close-btn").on("click", function() {
            $(".manu-bar .main-manu .manu-btn").removeClass("active");
            $(".manu-bar .main-manu .manu-list").removeClass("active");
            $(".manu-bar .main-manu .overlay").removeClass("active");
        });
        $(".title-bar .manu-btn, .manu-bar-v2 .close-btn").on("click", function() {
            $(".manu-bar-v2 .main-manu").toggleClass("active");
            $(".manu-bar-v2 .overlay").toggleClass("active");
            $(".title-bar .manu-btn").toggleClass("active");
        });
        $(".manu-bar-v2 .overlay").on("click", function() {
            $(".title-bar .manu-btn").removeClass("active");
            $(".manu-bar-v2 .main-manu, .manu-bar-v2 .close-btn").removeClass("active");
            $(this).removeClass("active");
        });
        $(".manu-bar-v3 .manu-btn, .manu-bar-v3 .close-btn").on("click", function() {
            $(".manu-bar-v3 .main-manu").toggleClass("active");
            $(".manu-bar-v3 .overlay").toggleClass("active");
            $(".manu-bar-v3 .manu-btn").toggleClass("active");
        });
        $(".manu-bar-v3 .overlay").on("click", function() {
            $(".manu-bar-v3 .manu-btn").toggleClass("active");
            $(".manu-bar-v3 .main-manu, .manu-bar-v3 .close-btn").removeClass("active");
            $(this).removeClass("active");
        });
        $(".manu-bar .main-manu li, .manu-bar-v2 .main-manu li,.manu-bar-v3 .main-manu li").on("click", function() {
            $(this).toggleClass("active");
            $("ul", this).animate({
                display: 'block',
                height: 'toggle',
            });
        });
    }

    /*=====================
        3 Bg Img
    =======================*/

    function bgImg() {
        "use strict";
        $("[data-background]").each(function() {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    }

    /*=====================
        4 Banner
    =======================*/
    function banner() {
        "use strict";
        $(".blog-banner>div").slick({
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 5000,
            infinite: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            centerMode: true,
            arrows: true,
            centerPadding: "15%",
            nextArrow: '<button class="btn-next"><svg viewBox="0 0 11.167 11.642"><g transform="translate(-2.333 -2.096)"><path class="a" d="M2.917,7h10" transform="translate(0 0.917)"/><path class="a" d="M7,2.917l4.083,5L7,12.917" transform="translate(1.833)"/></g></svg></button>',
            prevArrow: '<button class="btn-prev"><svg viewBox="0 0 11.167 11.642"><g transform="translate(13.5 13.737) rotate(180)"><path class="a" d="M2.917,7h10" transform="translate(0 0.917)"/><path class="a" d="M7,2.917l4.083,5L7,12.917" transform="translate(1.833)"/></g></svg></button>',
            responsive: [{
                breakpoint: 576,
                settings: {
                    centerPadding: "0%",
                }
            }]
        });
    }

    /*=====================
       5 Post Share
   =======================*/
    function postShare() {
        "use strict";
        $(".card-body p").selectionSharer();
    }

    /*=====================
        6 Post Slide
    =======================*/
    function postSlide() {
        "use strict";
        $(".post-slide .row").slick({
            autoplay: true,
            slidesToShow: 4,
            autoplaySpeed: 6000,
            infinite: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            arrows: true,
            slidesToScroll: 1,
            nextArrow: '<button class="btn-next"><svg viewBox="0 0 11.167 11.642"><g transform="translate(-2.333 -2.096)"><path class="a" d="M2.917,7h10" transform="translate(0 0.917)"/><path class="a" d="M7,2.917l4.083,5L7,12.917" transform="translate(1.833)"/></g></svg></button>',
            prevArrow: '<button class="btn-prev"><svg viewBox="0 0 11.167 11.642"><g transform="translate(13.5 13.737) rotate(180)"><path class="a" d="M2.917,7h10" transform="translate(0 0.917)"/><path class="a" d="M7,2.917l4.083,5L7,12.917" transform="translate(1.833)"/></g></svg></button>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    /*=====================
        7 R Post
    =======================*/
    function rPost() {
        "use strict";
        $(".resent-post .row").on("init", function(event, slick) {
            maxPages = Math.ceil(slick.slideCount / slidesPerPage);
            $(this).find('.slider-paging-number li').append('/ ' + maxPages);
        });
        $(".resent-post .row").slick({
            //autoplay: true,
            slidesToShow: 3,
            autoplaySpeed: 7000,
            infinite: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            arrows: true,
            dots: true,
            slidesToScroll: 1,
            nextArrow: '<button class="btn-next"><svg viewBox="0 0 6.001 10.496"><path class="a" d="M9.191,8,5.219,4.031a.747.747,0,0,1,0-1.059.756.756,0,0,1,1.063,0l4.5,4.5A.749.749,0,0,1,10.8,8.5L6.284,13.031a.75.75,0,0,1-1.062-1.059Z" transform="translate(-4.998 -2.754)"/></svg></button>',
            prevArrow: '<button class="btn-prev"><svg viewBox="0 0 6.001 10.497"><path class="a" d="M6.809,8l3.972-3.969A.75.75,0,0,0,9.719,2.972l-4.5,4.5A.749.749,0,0,0,5.2,8.5l4.519,4.528a.75.75,0,0,0,1.063-1.059Z" transform="translate(-5 -2.753)"/></svg></button>',
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    /*==================
        8 Bottom Top
    ==================*/
    function bottomTop() {
        "use strict";
        var bottomTop = ".main-footer .btton-top-btn a";
        // Smooth bottom to top
        $(bottomTop).on("click", function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000); // The number here represents the speed of the scroll in milliseconds
                    return false;
                }
            }
        });
    }

})(jQuery);