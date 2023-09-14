import './assets/scss/all.scss';

$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});
const swiper = new Swiper('.marquee', {
		allowTouchMove: false,
		slidesPerView: 'auto',
		autoplay: {
		delay: 0
	},
	loop: true,
	speed: 8000,
})

