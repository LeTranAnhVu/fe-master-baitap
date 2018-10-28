// Main
console.log('FullStack Vietnam!')


$(document).ready(function(){
	$('.main-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		dots: false
	});
	$('.customer-feedback-carousel').owlCarousel({
		items: 1,
		loop: true,
		// autoplay: true,
		autoplayTimeout: 5000,
		dots: true
	});
	// $('.customers-carousel').owlCarousel({
	// 	loop: true,
	// 	responsiveClass: true,
	// 	responsive:{
	// 		0:{
	// 			items: 5,
	// 			nav: false,
	// 			dots: true
	// 		},
	// 		540:{
	// 			items: 5,
	// 			nav: false,
	// 			dots: true
	// 		},
	// 		720:{
	// 			items: 5,
	// 			nav: true,
	// 		},
	// 		1000:{
	// 			items: 6,
	// 			nav: true,
	// 			dots: false,
	// 			navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	// 		}
	// 	}
	// });
  });
