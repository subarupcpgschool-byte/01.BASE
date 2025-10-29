$('.p-room__slider1').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 1500,
	dots: true
});
$('.p-room__slider2').slick({
	arrows: false,
	slidesToShow: 2,
	autoplay: true,
	autoplaySpeed: 0,
    speed: 15000,
    cssEase: 'linear',
	centerMode: true,
	centerPadding: '22.7%',
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1
		  }
		},
	  ]
});
$('.p-onsen__slider1').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 0,
    speed: 15000,
    cssEase: 'linear',
	slidesToShow: 2.8,
	vertical:true
});
$('.p-onsen__slider2').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 0,
    speed: 15000,
    cssEase: 'linear',
	slidesToShow: 2.8,
	vertical:true
});

$(function(){
	//ローディングアニメーション
	$('.js-loading').addClass('is-anime');
	$('.js-loading2').delay(5600).queue(function(){
		$(this).addClass('is-anime');

		const items = $('.p-fv__item');

		items.each(function(index) {
		  const item = $(this);
		  item.delay((index + 3) * 200).queue(function(next) {
			item.addClass('is-anime');
			next();
		  });
		});
	});

	//bakubaku
	$(window).on('scroll', function (){
		let scroll = $(window).scrollTop();
		let wh = $(window).height();

		let bakubaku = $('.js-bakubaku');
		bakubaku.each(function () {
		  let offset = $(this).offset().top;
	  
		  if(scroll > offset - (wh * 0.8) ){
			$(this).addClass('is-show');
		  }
		});

		let yurayura = $('.js-yurayura');
		yurayura.each(function(){
			let offset = $(this).offset().top;
			
			if(scroll > offset - (wh * 0.8) ){
				// $(this).delay(1000).addClass('is-anime');
				$(this).delay(1400).queue(function(){
					$(this).addClass('is-anime');
				});
			  }
		});

		let move =$('.js-move');
		move.each(function(){
			let offset = $(this).offset().top;
			if(scroll > offset - (wh * 0.8) ){
				$(this).addClass('is-anime');
			  }
		});
	  
	});
});