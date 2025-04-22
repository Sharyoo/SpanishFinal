$("#Navarre1, #Navarre2, #Navarre3, #Capital").hover(function() {

  if (this.id == "Navarre1") {
    $(this).css('fill', 'green');
    $("#Navarre2").css('fill', 'green');
    $("#Navarre3").css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element">' + 'Navarre' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Navarre2") {
    $(this).css('fill', 'green');
    $("#Navarre1").css('fill', 'green');
    $("#Navarre3").css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element">' + 'Navarre' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Navarre3") {
    $(this).css('fill', 'green');
    $("#Navarre1").css('fill', 'green');
    $("#Navarre2").css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element">' + 'Navarre' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Capital") {
    $(this).css('fill', 'yellow');
    var newElement = $('<div class="new-element-long">' + 'Pamplona (Capital)' + '</div>');
    $("body").append(newElement);
  }
  else {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);
  }

}, function() {

  if (this.id == "Navarre1") {
    $("#Navarre2").css('fill', 'white');
    $("#Navarre3").css('fill', 'white');
    $("#Capital").css('fill', 'white');
  }
  else if (this.id == "Navarre2") {
    $("#Navarre1").css('fill', 'white');
    $("#Navarre3").css('fill', 'white');
    $("#Capital").css('fill', 'white');
  }
  else if (this.id == "Navarre3") {
    $("#Navarre1").css('fill', 'white');
    $("#Navarre2").css('fill', 'white');
    $("#Capital").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
  $("body").find('.new-element-long').remove();

})