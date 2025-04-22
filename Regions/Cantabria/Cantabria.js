$("#Cantabria, #Capital").hover(function() {
    
  if (this.id == "Capital") {
      $("#Cantabria").css('fill', 'white');
      $(this).css('fill', 'yellow');
      var newElement = $('<div class="new-element-long">' + "Santander (Capital)" + '</div>');
       $("body").append(newElement);
  }
  else if (this.id == "Cantabria") {
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

  if (this.id == "Cantabria") {
      $("#Capital").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
  $("body").find('.new-element-long').remove();
})