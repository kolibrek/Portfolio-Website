$(document).ready(function () {
	var $btn = $('#menu-btn'),
	$menu = $('#dropdown-menu'),
	menu_shown = false;

	$btn.click(function () {
		if (!menu_shown) {
			$menu.velocity({opacity: 1}, {duration: 200, display: "block"});
			menu_shown = true;
		} else {
			$menu.velocity({opacity: 0}, {duration: 200, display: "none"});
			menu_shown = false;
		}
	});

	$menu.mouseleave(function () {
		if (menu_shown) {
			$menu.velocity({opacity: 0}, {duration: 200, display: "none"});
			menu_shown = false;
		}
	});
});