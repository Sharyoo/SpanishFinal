$("#Avila, #Segovia, #Soria, #Salamanca, #Zamora, #Leon, #Palencia, #Valladolid, #Capital").hover(function() {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);
}, function() {
    $(this).css('fill', 'white');
    $("body").find('.new-element').remove();
})