jQuery(document).ready(function () {
	$(window).scroll(function () {
		var topPos = $(window).scrollTop();
		if (topPos > 10) {
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
	});

	$('.box-menu').on('click', function () {
		$('header').toggleClass('active-nav');
	});

	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
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