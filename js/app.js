function playIntro() {
	// Creates a border that slowly wraps around the KC logo.
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
	
	// Control the legal info pane with the button.
	var legal_pushed = false;
	$('#legal-btn').click(function (event) {
		event.preventDefault();
		var legal = $('#legal');
		if (legal_pushed) {
			$(this).removeClass('active');
			legal.velocity({translateX: "100%"},{duration: 400, display: "none"});
			legal_pushed = false;
		} else {
			$(this).addClass('active');
			legal.velocity({translateX: "-100%"},{duration: 400, display: "block"});
			legal_pushed = true;
		}
	});	
});
