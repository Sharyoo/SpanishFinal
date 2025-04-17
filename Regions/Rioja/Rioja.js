$("#Rioja, #Capital").hover(function() {
    
  if (this.id == "Rioja") {
      $("#Capital").css('fill', 'green');
  }

  $(this).css('fill', 'green');
  var newElement = $('<div class="new-element">' + this.id + '</div>');
  $("body").append(newElement);

}, function() {

  if (this.id == "Rioja") {
    $("#Capital").css('fill', 'white');
}

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
})