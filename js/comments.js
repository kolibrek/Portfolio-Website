$(document).ready(
  function() {
    loadComments();
  }
);

function loadComments()
{
  $.getJSON("js/comments.json")
  .done(function(data){
    var comments = data.comments;
    for(var i = 0; i < comments.length; i++)
    {
      var main = $('#comments');
      var comment = $('<div>');
      var name = $('<h3>');
      var text = $('<p>');
      var timestamp = $('<time>');

      name.html(comments[i].name);
      text.html(comments[i].text);

      var now = new Date();
      var date = new Date(comments[i].date);
      timestamp.html(determineAge(now, date));

      comment.addClass('comment');
      comment.append(name);
      comment.append(text);
      comment.append(timestamp);

      main.append(comment);
    }
  })
  .fail(function(jqxhr, textStatus, error){
    var err = textStatus + " " + error;
    console.log("Request Failed: " + err);
  });
}

function determineAge(now, date)
{
  var ms = now.getTime() - date.getTime();
  var seconds = ms/1000;
  var minutes = seconds/60;
  var hours = minutes/60;
  var days = hours/24;
  if (ms < 0) {
    return "from the future!";
  } else if (days > 6) {
    return date.toLocaleDateString();
  } else if (days >= 1) {
    return Math.floor(days) + "d ago";
  } else if (hours >= 1) {
    return Math.floor(hours) + "h ago";
  } else if (minutes >= 1) {
    return Math.floor(minutes) + " min. ago";
  } else {
    return Math.floor(seconds) + " sec. ago";
  }
}

function submitComment()
{
  $('form').submit(function() {
    console.log("form submitted...");
  });
}
