$("#Avila, #Segovia, #Soria, #Salamanca, #Zamora, #Leon, #Palencia, #Valladolid, #Burgos1, #Burgos2, #Capital").hover(function() {

    if (this.id == "Burgos1") {
        $("#Burgos2").css('fill', 'green');
    }
    else if (this.id == "Burgos2") {
        $("#Burgos1").css('fill', 'green');
    }
    else if (this.id == "Valladolid") {
        $("#Capital").css('fill', 'green');
    }

    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);

}, function() {

    if (this.id == "Burgos1") {
        $("#Burgos2").css('fill', 'white');
    }
    else if (this.id == "Burgos2") {
        $("#Burgos1").css('fill', 'white');
    }
    else if (this.id == "Valladolid") {
        $("#Capital").css('fill', 'white');
    }

    $(this).css('fill', 'white');
    $("body").find('.new-element').remove();

})