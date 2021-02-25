function calculateAge(birthday) {
	let ageDifMs = Date.now() - birthday;
	let ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

$(function() {

	$(window).on("scroll", function () {
		let topPos = $(window).scrollTop();
		if (topPos > 10) {
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
	});
	
	$('.box-menu').on('click', function () {
		$('header').toggleClass('active-nav');
	});
	
	$("#main-years").text(calculateAge(new Date('1997-10-17')))
	$("#main-dev-years").text(new Date().getFullYear() - 2016)
	
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.on('click', function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top -83
					}, 800);
				}
			}
		});
});