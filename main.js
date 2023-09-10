import './assets/scss/all.scss';

$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});
