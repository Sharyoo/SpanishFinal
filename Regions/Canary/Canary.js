$("#Hierro, #Palma, #Gomera, #Tenerife, #Canaria, #Fuerteventura, #Lanzarote, #Capital1, #Capital2").hover(function() {
    
  if (this.id == "Capital1") {
      $("#Tenerife").css('fill', 'white');
      $(this).css('fill', 'yellow');
      var newElement = $('<div class="new-element-long">' + "Santa Cruz de Tenerife (La capital)" + '</div>');
       $("body").append(newElement);
  }
  else if (this.id == "Capital2") {
    $("#Canaria").css('fill', 'white');
    $(this).css('fill', 'yellow');
    var newElement = $('<div class="new-element-long">' + "Las Palmas de Gran Canaria (La capital)" + '</div>');
      $("body").append(newElement);
  }
  else if (this.id == "Tenerife") {
      $("#Capital1").css('fill', 'yellow');
      $(this).css('fill', 'green');
      var newElement = $('<div class="new-element">' + this.id + '</div>');
       $("body").append(newElement);
  }
  else if (this.id == "Canaria") {
    $("#Capital2").css('fill', 'yellow');
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + 'Gran Canaria' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Hierro") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + 'El Hierro' + '</div>');
   $("body").append(newElement);
  }
  else if (this.id == "Palma") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + 'La Palma' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Gomera") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + 'La Gomera' + '</div>');
    $("body").append(newElement);
  }
  else {
      $(this).css('fill', 'green');
      var newElement = $('<div class="new-element">' + this.id + '</div>');
       $("body").append(newElement);
  }

}, function() {

  if (this.id == "Tenerife") {
    $("#Capital1").css('fill', 'white');
  }
  else if (this.id == "Canaria") {
    $("#Capital2").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
  $("body").find('.new-element-long').remove();
})