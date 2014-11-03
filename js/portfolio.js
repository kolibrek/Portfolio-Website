$(document).ready(function() {

	// Causes the Nav-Bar to smoothly scroll between screens.
	$('nav a').click(function(event) {
		if ($(this).attr('href').charAt(0) == "#") {
			event.preventDefault();
		}
		$('body').scrollTo($(this).attr('href'), 1000);
	});
	displayModifiedTime();
});

function displayModifiedTime()
{
	var footer = $('footer');
	var time = $('<time>');
	time.html(document.lastModified);
	footer.html("Website created by Kevin Clemons ---- Last modified: ");
	footer.append(time);
}
