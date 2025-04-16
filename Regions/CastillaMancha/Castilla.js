$("#Albacete, #Cuenca, #Guadalajara, #CiudadReal, #Toledo, #Capital").hover(function() {
  console.log(this.id);
  $(this).css('fill', 'green');
  var newElement = $('<div class="new-element">' + this.id + '</div>');
  $("body").append(newElement);
}, function() {
  $(this).css('fill', 'white');
  $("body").find('.new-element').remove();
})