function playIntro() {
	var intro = $('#intro'),
		bg_top = $('#intro .logo #background-layer #top'),
		bg_right = $('#intro .logo #background-layer #right'),
		bg_bottom = $('#intro .logo #background-layer #bottom'),
		bg_left = $('#intro .logo #background-layer #left');
	bg_top.velocity({x2: 100},{duration: 1000});
	bg_right.velocity({y2: 130},{duration: 1200, delay: 800});
	bg_bottom.velocity({x2: 0},{duration: 1000, delay: 1800});
	bg_left.velocity({y2: 0},{duration: 1200, delay: 2600});
	intro.velocity({translateY: "-100%"},{duration: 1000, delay: 4000, display: "none"});
}

$(document).ready(function () {
	if (sessionStorage.first_visit === undefined && $('#intro').length > 0) {
		playIntro();
		sessionStorage.first_visit = false;
	} else {
		$('#intro').velocity({opacity: 0},{duration: 0, display: "none"});
	}
	
	$(window).scroll(function (event) {
		event.preventDefault();
	});
});
