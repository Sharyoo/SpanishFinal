$("#Madrid1, #Madrid2, #Capital").hover(function() {

  if (this.id == "Madrid1") {
    $("#Madrid2").css('fill', 'green');
  }

  if (this.id == "Madrid2") {
    $("#Madrid1").css('fill', 'green');
  }

  $(this).css('fill', 'green');
  var newElement = $('<div class="new-element">' + this.id + '</div>');
  $("body").append(newElement);

}, function() {

  if (this.id == "Madrid1") {
    $("#Madrid2").css('fill', 'white');
  }

  if (this.id == "Madrid2") {
    $("#Madrid1").css('fill', 'white');
  }

  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
})