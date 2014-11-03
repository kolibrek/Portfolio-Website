$(document).ready(function () {
	$("main").fadeIn(500);

	$('a.external').click(function (e) {
		link = $(this).attr('href');
		e.preventDefault();
		$("main").fadeOut(500);
		window.setTimeout(function () {
			document.location.href = link;
		}, 500);
	});
});