$("#Ibiza, #Formentera, #Mallorca, #Menorca, #Capital").hover(function() {
    
  if (this.id == "Capital") {
      $("#Mallorca").css('fill', 'white');
      $(this).css('fill', 'yellow');
      var newElement = $('<div class="new-element-long">' + "Palma (Capital)" + '</div>');
       $("body").append(newElement);
  }
  else if (this.id == "Mallorca") {
      $("#Capital").css('fill', 'yellow');
      $(this).css('fill', 'green');
      var newElement = $('<div class="new-element">' + this.id + '</div>');
       $("body").append(newElement);
  }
  else {
      $(this).css('fill', 'green');
      var newElement = $('<div class="new-element">' + this.id + '</div>');
       $("body").append(newElement);
  }

}, function() {

  if (this.id == "Mallorca") {
      $("#Capital").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
  $("body").find('.new-element-long').remove();
})