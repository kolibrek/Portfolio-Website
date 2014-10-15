$(document).ready(function() {

  // Causes the Nav-Bar to smoothly scroll between screens.
  $('nav a').click(function(event) {
    if ($(this).attr('href').charAt(0) == "#") {
      event.preventDefault();
    }
    $('body').scrollTo($(this).attr('href'), 1000);
  });

  // Adds behavior to make image thumbnails result in a full size popup when clicked.
  var thumb = $('.thumb');
  var popup = $('.popup');

  thumb.hover(function() {
    var elements = $(this).parent().children();
    var span = $(elements[0]);
    span.slideToggle(100);
  });

  thumb.click(function() {
    var elements = $(this).parent().children();
    var title = $(elements[0]);
    var des = $(elements[1]);
    var image = popup.children().first();
    var description = popup.children("#info");
    image.attr('src', $(this).attr('src'));
    description.html(title.html() + " - " + des.html());
    popup.fadeIn();
  });

  popup.click(function() {
    $(this).fadeOut(500);
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
