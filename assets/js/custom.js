$(window).resize(function(){
    // function
    news_slider();
    services_slider();
    kurse_day_title();
});


$(document).ready(function(){
    //function
    news_slider();
    services_slider();
    kurse_day_title();


    // WOW js
    new WOW().init();

    //moretext js
    $('.moreless-button').click(function() {
        $(this).parents('.main_more_text').siblings().find('.moretext').slideUp();
        $(this).parents('.owl-item').siblings().find('.moretext').slideUp();
        $(this).parents('.main_more_text').find('.moretext').slideToggle();
        $(this).parents('.main_more_text').find('.slide_toggle_btn').fadeToggle('fast');

        setTimeout(function(){ $('.owl-carousel').trigger('refresh.owl.carousel'); }, 470);

        $(this).parents('.col-md-4').siblings().find('.moretext').slideUp();

        if ($(this).find('span').text() == "weniger") {
            $(this).find('span').text("mehr dazu")
            $(this).find('.fa-angle-down').removeClass('angle_rotact');
            
        } else {
            $(this).find('span').text("weniger");
            $(this).find('.fa-angle-down').addClass('angle_rotact');
        }
    });

    //drop down js
    $(".dropdown-menus ul li a").on('click resize',function(){
        var drop_down_data_value = $(this).attr('data-value');

        $(this).parents('.dropdown-menus').find(".days_right_all p").attr('data-value', drop_down_data_value);
        $(this).parents('li').find('.kurse_right_arrow').addClass('active').parents('li').siblings().find('.kurse_right_arrow').removeClass('active');

        var border_none = $(this).parents('li').prev();

        border_none.addClass('border_none');
        border_none.prevAll().removeClass('border_none');

        check_training();
    });

    //drop down js
    $(".drop_down_menu").click(function(){
        $(".all_kurse_inner_section ul").toggleClass('show_menu');
        $(".all_kurse_inner_section ul > li").click(function(){
            $(".drop_down_menu p").text($(this).text());
            $(".all_kurse_inner_section ul").removeClass('show_menu');
        });
    });



    //day list js
    $('.day_list ul li a').on('change click', function() {
        $(this).addClass('active').parents('li').siblings().find('a').removeClass('active');
    });

    //right kaurse table js
    $('.all_kurse_inner_section ul li a').on('change click', function() {
        $(this).addClass('active').parents('li').siblings().find('a').removeClass('active');
    });

    $('.unser_team_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        stagePadding: 155,
        dots: false,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z\" transform=\"translate(19.527 20.679) rotate(180)\"/>\n" +
        "</svg>\n","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z\"/>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                margin: 30,
                stagePadding: 10,
                dots:true,
            },
            375:{
                items:1,
                margin: 30,
                stagePadding: 60,
                dots:true,
            },
            451:{
                items:1,
                margin: 30,
                stagePadding: 100,
                dots:true,
            },
            576:{
                items:2,
                margin: 30,
                stagePadding: 80,
            },
            768:{
                items:3,
                margin: 30,
                stagePadding: 100,
            },
            992:{
                items:4,
                margin: 40,
                stagePadding: 100,
            },
            1200:{
                items:4,
                margin: 50,
                stagePadding: 100,
            },
            1360:{
                items:4,
                margin: 50,
                stagePadding: 135,
            },
            1531:{
                items:4,
                margin: 50,
                stagePadding: 135,
            },
            1801:{
                items:4,
                margin: 60,
            }
        }
    });

    $('.studio_center_inner_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: true,
        dots:false,
        stagePadding: 400,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z\" transform=\"translate(19.527 20.679) rotate(180)\"/>\n" +
        "</svg>\n","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z\"/>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                stagePadding: 50,
                margin:30,
                center: false,
                dots:true,
            },
            401:{
                items:1,
                stagePadding: 70,
                margin:30,
                center: false,
                dots:true,
            },
            576:{
                items:2,
                stagePadding: 80,
                margin:30,
                center: false,
            },
            768:{
                items:1,
                stagePadding: 200,
            },
            992:{
                items:1,
                stagePadding: 200,
            },
            1200:{
                items:1,
                stagePadding: 200,
            },
            1361:{
                items:1,
                stagePadding: 250,
            },
            1531:{
                items:1,
                stagePadding: 300,
            },
            1601:{
                items:1,
                stagePadding: 400,
            },
        }
    })

    $('.course_slider .owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        margin:100,
        stagePadding: 125,
        dots:false,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z\" transform=\"translate(19.527 20.679) rotate(180)\"/>\n" +
        "</svg>\n","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z\"/>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                margin: 25,
                stagePadding: 0,
                dots:true,
            },
            321:{
                items:1,
                margin: 25,
                stagePadding: 50,
                dots:true,
            },
            576:{
                items:2,
                margin: 25,
                stagePadding: 0,
            },
            768:{
                items:3,
                margin: 30,
                stagePadding: 0,
            },
            992:{
                items:3,
                margin: 30,
                stagePadding: 0,
            },
            1200:{
                items:3,
                margin: 50,
            },
            1361:{
                items:3,
                margin: 60
            },
            1531:{
                items:3,
                margin: 75,
            },
            1601:{
                items:3
            },
        }
    })

    //Leistungen owl Slider
    $('.leistungen-owl').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        dots: false,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z\" transform=\"translate(19.527 20.679) rotate(180)\"/>\n" +
        "</svg>\n","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z\"/>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                dots:true,
                margin:0,
            },
            575:{
                items:2,
                dots:true,
            },
            991:{
                items:2,
            }
        }
    });

    //Bewertungen Owl Slider
    $('.bewertungen-owl').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: ["\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z\" transform=\"translate(19.527 20.679) rotate(180)\"/>\n" +
        "</svg>\n","\n" +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
        "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z\"/>\n" +
        "</svg>\n"],
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            575:{
                items:1,
            },
        }
    });

    // toggle class
    $('.menu-toggle-btn').click(function(){
        $('.header-wrapper').toggleClass('mobileopen');
        $('html').toggleClass('cm-overflow');
    });

    $('.has-submenu a').click(function () {
        if ($(window).width() <= 991) {
            $('.has-submenu').toggleClass('show-active');
            $('.mobile-dropdown-submenu').slideToggle();
        }
    });

    // Accordion Js
    $('.ct_accordion_lable').click(function(){

        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
        $(this).toggleClass('ct_visiable');
        /* $(this).parents('.hgf-col').siblings().find('.ct_accordion_lable').removeClass('ct_visiable');*/

        $(this).siblings().find('.ct_accordion_info').slideUp();
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_info').slideUp();
        /*  $(this).parents('.hgf-col').siblings().find('.ct_accordion_info').slideUp();*/

        $(this).parents('.ct_accordion_wrap').find('.ct_accordion_info').slideToggle();
    });

    // footer-fixed menu
    $(".footer-fixed-trigger").click(function(){
        $(".footer-fixed-trigger").toggleClass("active");
        $(".footer-fixed-icon").toggleClass("show");
    });

    // Contact Side bar On Home page
    $('.contact--form-main').hover(
        function () {
            $(this).addClass('active');
            $('.contact--pallate').addClass('active');
        },
        function () {
            $(this).removeClass('active');
            $('.contact--pallate').removeClass('active');
        }
    );





});


// paket_slider
function news_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".news_slider");

    if (checkWidth >= 992) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 991) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop:true,
            margin:30,
            dots: false,
            nav: true,
            autoHeight: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
            "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z\" transform=\"translate(19.527 20.679) rotate(180)\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
            "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z\"/>\n" +
            "</svg>\n"],
            items:1,
            responsive:{
                0:{
                    items:1,
                    dots:true,
                    loop:true,
                },
                576:{
                    items:2
                },
                768:{
                    items:2
                },
            }
        });
    }
}

// service_slider
function services_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".services_slider");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop:true,
            margin:30,
            dots: false,
            nav: true,
            autoHeight: true,
            navText: ["\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
            "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M17.031,13.435,11.55,7.959a1.031,1.031,0,0,1,0-1.462,1.044,1.044,0,0,1,1.466,0l6.209,6.2a1.033,1.033,0,0,1,.03,1.427l-6.235,6.248a1.035,1.035,0,0,1-1.466-1.462Z\" transform=\"translate(19.527 20.679) rotate(180)\"/>\n" +
            "</svg>\n","\n" +
            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8.281\" height=\"14.483\" viewBox=\"0 0 8.281 14.483\">\n" +
            "  <path id=\"Icon_ionic-ios-arrow-forward\" data-name=\"Icon ionic-ios-arrow-forward\" d=\"M5.784,7.244.3,12.72a1.031,1.031,0,0,0,0,1.462,1.044,1.044,0,0,0,1.466,0l6.209-6.2a1.033,1.033,0,0,0,.03-1.427L1.774.3A1.035,1.035,0,0,0,.308,1.764Z\"/>\n" +
            "</svg>\n"],
            items:1,
            responsive:{
                0:{
                    items:1,
                    dots:true,
                    loop:true,
                },
                576:{
                    items:1
                },
                768:{
                    items:1
                },
            }
        });
    }
}



//mobile drop_down click function
function check_training(){
    var traning_value = $(".days_right_all .day").attr('data-value');
    var day_value = $(".days_right_all .all_right").attr('data-value');

    var merge_class = day_value + "_" + traning_value;

    $(".kursplan_time_main_section .kursplan_container").find("." + merge_class).addClass('active').siblings().removeClass('active');

}

function kurse_day_title(){
    if($(window).width() <= 575){
        $(function(){
            $(".day_list ul li a").each(function(i){
                len=$(this).text().length;
                if(len>2)
                {
                    $(this).text($(this).text().substr(0,2) + '.');
                }
            });
        });
    }
    else if($(window).width() > 575){
        $(function(){
            var make_array = [];
            $('.day_list ul li a').each(function(){
                make_array.push($(this).attr('data-value'));
            });

            $('.day_list ul li').each(function(index) {
                $(this).find('a').text(make_array[index]);
            });
        });
    }
}