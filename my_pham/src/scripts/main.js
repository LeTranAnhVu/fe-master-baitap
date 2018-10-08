// Main
console.log('FullStack Vietnam!')

// carousel
$(document).ready(function(){
	$('.main-carousel').owlCarousel({
		items: 1,
		dots: false,
		nav: true
	});

	$('.minor-carousel').owlCarousel({
		items: 4,
		dots: false,
		nav: true
	});

	$('.best-seller-carousel').owlCarousel({
		items: 1,
		dots: false,
		nav: true
	});
  });
  