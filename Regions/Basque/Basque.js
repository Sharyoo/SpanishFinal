$("#Alava, #Guipuzcoa, #Vizcaya, #Capital").hover(function() {
    
  if (this.id == "Alava") {
    $(this).css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Capital") {
    $(this).css('fill', 'yellow');
    var newElement = $('<div class="new-element-long">' + 'Vitoria-Gasteiz (Capital)' + '</div>');
    $("body").append(newElement);
  }
  else {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);
  }

}, function() {

  if (this.id == "Alava") {
    $("#Capital").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
  $("body").find('.new-element-long').remove();
})