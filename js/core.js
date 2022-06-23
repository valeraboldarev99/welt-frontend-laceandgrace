$(document).ready(function () {
	/*при скроле менять стили*/
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 50) {
	    $('.header').removeClass('noscrolled');
	    $('.header').addClass('scrolled');
	  }
	  else {
	    $('.header').removeClass('scrolled');
	    $('.header').addClass('noscrolled');
	  }
	});

	/*кнопка вверх*/
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 200) {
	    $('.scrollup').fadeIn();
	  }
	  else {
	    $('.scrollup').fadeOut();
	  }
	});

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	/*мобильное меню*/
	 var mobileSidebar = function()
	 {
	  function obj()
	  {
	    var self = this;
	    self.animSpeed = 400;
	    self.init = function()
	    {
	      self.events();
	    },
	    self.events = function()
	    {
	      $('.sidebar-open').click(function() {
	        self.open();
	      });
	      $('.sidebar-close, .sidebar-overlay').click(function() {
	        self.close();
	      });
	    },
	    self.open = function()
	    {
	      $('.sidebar').addClass('sidebar_opened');
	      $('.sidebar-overlay').fadeIn(self.animSpeed);
            // pageScroll.hide(1);
          },
          self.close = function()
          {
            $('.sidebar').removeClass('sidebar_opened');
            $('.sidebar-overlay').fadeOut(self.animSpeed);
            // pageScroll.show(0);
          }
        }
        return new obj();
      }();
      mobileSidebar.init();

	/*Показать/скрыть курс*/

	$('.showhide').on('click', function() {
		if($('.courses__items').css('display') == 'block') {
			$('.courses__items').css('display', 'none');
			$('.show').css('display', 'inline-block');
			$('.hide').css('display', 'none');
		}
		else {
			$('.courses__items').css('display', 'block');
			$('.show').css('display', 'none');
			$('.hide').css('display', 'inline-block');
		}
	});

	/*лого при наведении*/
	var logo_src;
	var logo = $('.logo').css('display') == "block";
	var logo_dark = $('.logo_dark').css('display') == "block" ;

	if(logo) {
		logo_src = $('.logo').attr('src');
	}

	if(logo_dark) {
		logo_src = $('.logo_dark').attr('src');
	}

	$('.header__logo').on('mouseover', function() {
		if($('.logo').css('display') == "block") {
			$('.logo').attr('src', 'img/logo_hover.svg');
		}
		if($('.logo_dark').css('display') == "block") {
			$('.logo_dark').attr('src', 'img/logo_hover.svg');
		}
	});
	$('.header__logo').on('mouseleave', function() {
		if($('.logo').css('display') == "block") {
			$('.logo').attr('src', logo_src);
		}
		if($('.logo_dark').css('display') == "block") {
			$('.logo_dark').attr('src', 'img/logo_dark.svg');
		}
	});

	// слaйдер курсов
	$('.slider').slick({
		slidesToScroll:1,
		slidesToShow:1,
		infinite: true,
		// autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:true,
		dots:false,
	});

	// маленький слaйдер курсов
	$('.slider-mini').slick({
		slidesToScroll:1,
		slidesToShow:2,
		infinite: true,
		pauseOnHover:true,
		arrows:true,
		dots:false,
		responsive: [
		{
			breakpoint: 1299,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		],
	});

	// функции в модалке
	$('[data-fancybox=""]').fancybox({
		afterLoad: function modalSlider() {
			$('.slider-modal').slick({
				slidesToScroll:1,
				slidesToShow:1,
				infinite: true,
				// autoplay: true,
				autoplaySpeed: 3000,
				pauseOnHover:true,
				arrows:true,
				dots:false,
			});

			/*показать пароль*/
			$('.eye').on('click', function() {
				$("#password").attr('type') == 'password' ? $("#password").attr('type','text') : $("#password").attr('type','password');
			});

			/*наведение на лого*/
			var sidebar__logo_src = $('.sidebar__logo').attr('src');
			$('.user-sidebar__logo').on('mouseover', function() {
				$('.sidebar__logo').attr('src', 'img/logo_hover.svg');
			});
			$('.user-sidebar__logo').on('mouseleave', function() {
				$('.sidebar__logo').attr('src', sidebar__logo_src);
			});
		},
	});

	$(".set > .set__btn").on("click", function(){
	      if($(this).hasClass('active')){
	        $(this).removeClass("active");
	        $(this).siblings('.set__content').slideUp(200);
	    }else{
	        $(".set > .set__btn").removeClass("active");
	        $(this).addClass("active");
	        $('.set__content').slideUp(200);
	        $(this).siblings('.set__content').slideDown(200);
	    }
	    return false
	});

	$('.play').on('click', function() {
		var video = document.getElementById("video");
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
});