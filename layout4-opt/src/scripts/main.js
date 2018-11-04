// Main
console.log('FullStack Vietnam!')





$(document).ready(function(){
	document.addEventListener("touchstart", function() {},false);
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
	$('.partner-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		responsiveClass: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items: 4,
				nav: true,
				dots: false,
			},
			576:{
				items: 4,
				nav: true,
				dots: false
			},
			768:{
				items: 4,
				nav: true,
			},
			992:{
				items: 5,
				nav: true,
				dots: true,
			}
		}
	});
  });
