// Main
console.log('FullStack Vietnam!')

// carousel
$(document).ready(function(){
	$('.main-carousel').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
	});

	$('.minor-carousel').owlCarousel({
		loop: true,
		items: 4,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
    	autoplayHoverPause: true,
		
	});

	$('.best-seller-carousel').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});
  });
  