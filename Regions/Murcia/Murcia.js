$("#Murcia, #Capital").hover(function() {

  if (this.id == "Murcia") {
    $(this).css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element-long">' + 'Region of Murcia' + '</div>');
    $("body").append(newElement);
  } else if (this.id == "Capital") {
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element-long">' + 'Murcia (Capital)' + '</div>');
    $("body").append(newElement);
  }
  else {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);
  }

}, function() {

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
  $("body").find('.new-element-long').remove();

})