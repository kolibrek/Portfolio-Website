function getRandomX () {
	var screenWidth = window.screen.availWidth;
	return Math.floor(Math.random() * screenWidth/3) - screenWidth/6;
}

function getRandomY () {
	var screenHeight = window.screen.availHeight;
	return Math.floor(Math.random() * screenHeight/3) - screenHeight/6;
}

function createElectron(container) {
	var $e = $('<div>');
	$e.addClass('circle');
	$e.addClass('electron');
	$e.css("zIndex", Math.floor(Math.random()*9));
	container.append($e);
}

function chooseColor() {
	var choice = Math.floor(Math.random() * 4);
	switch(choice) {
		case 0: 
			return "#993333";
			break;
		case 1:
			return "#339900";
			break;
		case 2:
			return "#33AAAA";
			break;
		default: return "#FFFFFF"
	}
}

function animateIntro() {
	var color = chooseColor(),
		$n = $('.nucleus'),
		$intro = $('.intro-container'),
		seconds = new Date().getSeconds() + 3;

	for (var i = 0; i < seconds; i++) {
		createElectron($($intro));
	}
	var	$e = $('.electron');

	$n.velocity({
		width: "6em",
		height: "6em"
	},{
		loop: 3,
		duration: 550
	})
	.velocity({
		width: 0,
		height: 0,
		opacity: 0
	},{
		duration: 700,
		display: "none"
	});

	$e.velocity({
		translateZ: function() {return Math.floor(Math.random() * 500) - 250},
		translateX: function() {return getRandomX()},
		translateY: function() {return getRandomY()},
		backgroundColor: color,
		opacity: function() { return Math.random() }
	}, 700, [500, 20])
	.velocity({
		translateZ: function() {return Math.floor(Math.random() * 500) - 250},
		translateX: function() {return getRandomX()},
		translateY: function() {return getRandomY()},
		opacity: function() { return Math.random() }
	}, 700, [500, 20])
	.velocity({
		translateZ: function() {return Math.floor(Math.random() * 500) - 250},
		translateX: function() {return getRandomX()},
		translateY: function() {return getRandomY()},
		opacity: function() { return Math.random() }
	}, 700, [500, 20])
	.velocity({
		translateZ: function() {return Math.floor(Math.random() * 500) - 250},
		translateX: function() {return getRandomX()},
		translateY: function() {return getRandomY()},
		opacity: function() { return Math.random() }
	}, 700, [200, 20])
	.velocity({
		translateZ: 0,
		translateX: -10,
		translateY: -10,
		opacity: 0,
		height: 0,
		width: 0
	}, {display: "none"}, 700, [500, 20]);

	$intro.velocity({
		opacity: 0,
	}, {
		duration: 100,
		delay: 3800,
		display: "none"
	});
	

	$intro.click(function() {
		$e.velocity("stop", true);
		$n.velocity("stop", true);
		$intro.velocity("stop", true)
		.velocity({
			opacity: 0,
		}, {
			duration: 100,
			display: "none"
		});
	});
	
}

$(document).ready(function () {
	var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
	if (!mobile) {
		animateIntro();
	} else {
		var $intro = $('.intro-container');
		$intro.css("display", "none");
	}
});
