/* ============================================================
 
 Template Name: MORACO - Personal Vcard Resume HTML Template
 Author: Marwa El-Manawy -- http://elmanawy.info
 Description: MORACO - Personal Vcard Resume HTML Template.
 Version: 2.0
 
 ===============================================================
 */


/*================================================
 [  START LIST OF SCRIPTS ]
 ================================================
 
 :: Navbar and scroll down
 :: Home Intro Typing
 :: Fancy Box 
 :: Responsive Menu
 :: Contact US Form 
 :: Back To Top 
 
 ======================================
 [ End table content ]
 ======================================*/


/*************************
 preloader
 *************************/
$("#load").fadeOut();
$('#loading').delay(0).fadeOut('slow');

/*************************
 Navbar and scroll down
 *************************/


$('#navbar,#scroll-down').on("click", function (e) {
     
    if ($(e.target).is('a.page-scroll')) {
       
        if (location.pathname.replace(/^\//, '') == e.target.pathname.replace(/^\//, '') && location.hostname == e.target.hostname) {
            var target = $(e.target.hash);
            target = target.length ? target : $('[name=' + e.target.hash.slice(1) + ']');
            if (target.length) {
           
                var gap = 0;
                $('html,body').animate({
                    scrollTop: target.offset().top - gap
                }, 900);

            }

            
        }
        return false;


    }

});

$('body').scrollspy({
    target: '.sidebar',
    offset: 80
});

/*************************
 Responsive Menu
 *************************/
$('#menu-icon').on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.sidebar').animate({'margin-left': 230}, 300);
    } else {
        $(this).removeClass('active');
        $('.sidebar').animate({'margin-left': 0}, 300);
    }
    return false;
});

$('.sidebar a').on("click", function (e) {
    $('#menu-icon').removeClass('active');
        $('.sidebar').animate({'margin-left': 0}, 300);

    });

/*************************
 Home Intro Typing
 *************************/

$("#typed").typed({
    stringsElement: $('#typed-strings'),
    typeSpeed: 20,
    backDelay: 500,
    loop: false,
    contentType: 'html',
    loopCount: false,
    callback: function () {
        foo();
    },
    resetCallback: function () {
        newTyped();
    }
});


$(".reset").on("click", function (e) {
    $("#typed").typed('reset');
});



function newTyped() {
}

function foo() {
    console.log("Callback");
}

/*************************
 Fancy Box
 *************************/
$('.fancybox').fancybox();


/*************************
 Contact US Form
 *************************/
$("#contact_form").on("submit", function (e)
{
    $('#show_contact_msg').html('<div class=gen>Sending Message..</div>');
    var username = $('#contact_name').val();
    var useremail = $('#contact_email').val();
    var userphone = $('#contact_phone').val();
    var commenttext = $('#contact_text').val();
    var formURL = $(this).attr("action");
    var data = {
        username: username,
        useremail: useremail,
        userphone: userphone,
        commenttext: commenttext,
    }
    $.ajax(
            {
                url: formURL,
                type: "POST",
                data: data,
                success: function (res) {
                    if (res == '1') {
                        $('#show_contact_msg').html('<div class=gen><i class="fa fa-smile-o" aria-hidden="true"></i> Спасибо за ваше обращение. Я в ближайшее время свяжусь с Вами!</div>');
                        $("#contact_form")[0].reset();
                    }

                    if (res == '5') {
                        $('#show_contact_msg').html('<div class=err><i class="fa fa-frown-o" aria-hidden="true"></i> Неккоректный email</div>');
                    }
					
					if (res == '2') {
                        $('#show_contact_msg').html('<div class=err><i class="fa fa-frown-o" aria-hidden="true"></i> Ошибка! Попробуйте повторить позднее.</div>');
                    }
                }
            });
    e.preventDefault();
});
$(function () {
    var selectedClass = "";
    $(".fil-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#portfolio-page").fadeTo(100, 0.1);
        $("#portfolio-page div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio-page").fadeTo(300, 1);
        }, 300);

    });
});

/*************************
 Back To Top
 *************************/

 jQuery(document).ready(function ($) {
        // hide #back-top first
        $(".goto-top").hide();

        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.goto-top').fadeIn();
                } else {
                    $('.goto-top').fadeOut();
                }
            });

            // scroll body to 0px on click
            $('.goto-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });
    });

