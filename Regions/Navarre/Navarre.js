$("#Navarre1, #Navarre2, #Navarre3, #Capital").hover(function() {

  if (this.id == "Navarre1") {
    $("#Navarre2").css('fill', 'green');
    $("#Navarre3").css('fill', 'green');
  }
  else if (this.id == "Navarre2") {
    $("#Navarre1").css('fill', 'green');
    $("#Navarre3").css('fill', 'green');
  }
  else if (this.id == "Navarre3") {
    $("#Navarre1").css('fill', 'green');
    $("#Navarre2").css('fill', 'green');
  }

  $(this).css('fill', 'green');
  var newElement = $('<div class="new-element">' + this.id + '</div>');
  $("body").append(newElement);

}, function() {

  if (this.id == "Navarre1") {
    $("#Navarre2").css('fill', 'white');
    $("#Navarre3").css('fill', 'white');
  }
  else if (this.id == "Navarre2") {
    $("#Navarre1").css('fill', 'white');
    $("#Navarre3").css('fill', 'white');
  }
  else if (this.id == "Navarre3") {
    $("#Navarre1").css('fill', 'white');
    $("#Navarre2").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();

})