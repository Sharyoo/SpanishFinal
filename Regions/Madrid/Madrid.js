$("#Madrid1, #Madrid2, #Capital").hover(function() {

  if (this.id == "Madrid1") {
    $(this).css('fill', 'green');
    $("#Madrid2").css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element">' + 'Madrid' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Madrid2") {
    $(this).css('fill', 'green');
    $("#Madrid1").css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element">' + 'Madrid' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Capital") {
    $(this).css('fill', 'yellow');
    var newElement = $('<div class="new-element-long">' + 'Madrid (Capital)' + '</div>');
    $("body").append(newElement);
  }
  else {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);
  }

}, function() {

  if (this.id == "Madrid1") {
    $("#Madrid2").css('fill', 'white');
    $("#Capital").css('fill', 'white');
  }

  if (this.id == "Madrid2") {
    $("#Madrid1").css('fill', 'white');
    $("#Capital").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
  $("body").find('.new-element-long').remove();
})