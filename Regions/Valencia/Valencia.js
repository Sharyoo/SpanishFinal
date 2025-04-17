$("#Alicante, #Valencia1, #Valencia2, #Castellon, #Capital").hover(function() {
    
  if (this.id == "Valencia1") {
    $("#Valencia2").css('fill', 'green');
    $("#Capital").css('fill', 'green');
  }
  else if (this.id == "Valencia2") {
    $("#Valencia1").css('fill', 'green');
    $("#Capital").css('fill', 'green');
  }

  $(this).css('fill', 'green');
  var newElement = $('<div class="new-element">' + this.id + '</div>');
  $("body").append(newElement);

}, function() {

  if (this.id == "Valencia1") {
    $("#Valencia2").css('fill', 'white');
    $("#Capital").css('fill', 'white');
  }
  else if (this.id == "Valencia2") {
    $("#Valencia1").css('fill', 'white');
    $("#Capital").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
})