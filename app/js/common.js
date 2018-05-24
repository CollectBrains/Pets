$(function() {


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
