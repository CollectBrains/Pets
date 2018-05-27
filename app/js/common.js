$(function() {

	// $('[data-fancybox="modal"]').fancybox({
	// 	// Options will go here
	// });

	$('.top-nav').after('<div class="mobile-menu__overlay">');
	$('.top-nav__list').clone().appendTo('.mobile-menu__overlay');
	$('.mobile-menu__overlay .top-nav__list').addClass('overlay');
	$('.mobile-wrap').on("click", function() {
		$("body").toggleClass('mobile-scroll');
		$('.mobile-menu__overlay > .top-nav__list, .overlay').stop().slideToggle();
	});

	$('.js-slick').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		prevArrow: ".slick-prev",
		nextArrow: ".slick-next",
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	svg4everybody();

});
