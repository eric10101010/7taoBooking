import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.bundle';
$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

const swiper = new Swiper('.marquee', {
	loop: true,
	speed: 8000,
	slidesPerView: 'auto',    
	autoplay: {
		delay: 0,
		pauseOnMouseEnter: true,        
		disableOnInteraction: false,   
		reverseDirection: true,         
	},
})
