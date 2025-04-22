$("#Alicante, #Valencia1, #Valencia2, #Castellon, #Capital").hover(function() {
    
  if (this.id == "Valencia1") {
    $(this).css('fill', 'green');
    $("#Valencia2").css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element">' + 'Valencia' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Valencia2") {
    $(this).css('fill', 'green');
    $("#Valencia1").css('fill', 'green');
    $("#Capital").css('fill', 'yellow');
    var newElement = $('<div class="new-element">' + 'Valencia' + '</div>');
    $("body").append(newElement);
  } 
  else if (this.id == "Capital") {
    $(this).css('fill', 'yellow');
    var newElement = $('<div class="new-element-long">' + 'Valencia (La capital)' + '</div>');
    $("body").append(newElement);
  }
  else if (this.id == "Castellon") {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + 'Castellón' + '</div>');
    $("body").append(newElement);
  }
  else {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);
  }

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
  $("body").find('.new-element-long').remove();
})