$("#Ourense, #Lugo, #Coruna, #Pontevedra, #Capital").hover(function() {
    
  if (this.id == "Capital") {
      $("#Coruna").css('fill', 'white');
      $(this).css('fill', 'yellow');
      var newElement = $('<div class="new-element-long">' + "Santiago de Compostela (Capital)" + '</div>');
       $("body").append(newElement);
  }
  else if (this.id == "Coruna") {
    $(this).css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);
  }
  else {
      $(this).css('fill', 'green');
      var newElement = $('<div class="new-element">' + this.id + '</div>');
       $("body").append(newElement);
  }

}, function() {

  if (this.id == "Coruna") {
      $("#Capital").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
  $("body").find('.new-element-long').remove();
})