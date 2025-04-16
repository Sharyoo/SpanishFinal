$("#Cadiz, #Malaga, #Granada, #Almeria, #Jaen, #Cordoba, #Sevilla, #Huelva, #Capital").hover(function() {
    
    if (this.id == "Capital") {
        $("#Sevilla").css('fill', 'white');
    }
    else if (this.id == "Sevilla") {
        $("#Capital").css('fill', 'green');
    }

    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);

}, function() {

    if (this.id == "Sevilla") {
        $("#Capital").css('fill', 'white');
    }

    $(this).css('fill', 'white');
    $("body").find('.new-element').remove();
})