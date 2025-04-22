$("#Avila, #Segovia, #Soria, #Salamanca, #Zamora, #Leon, #Palencia, #Valladolid, #Burgos1, #Burgos2, #Capital").hover(function() {

    if (this.id == "Burgos1") {
        $(this).css('fill', 'green');
        $("#Burgos2").css('fill', 'green');
        var newElement = $('<div class="new-element">' + 'Burgos' + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Burgos2") {
        $(this).css('fill', 'green');
        $("#Burgos1").css('fill', 'green');
        var newElement = $('<div class="new-element">' + 'Burgos' + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Valladolid") {
        $(this).css('fill', 'green');
        $("#Capital").css('fill', 'yellow');
        var newElement = $('<div class="new-element">' + this.id + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Capital") {
        $(this).css('fill', 'yellow');
        var newElement = $('<div class="new-element-long">' + 'Valladolid (La capital)' + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Avila") {
        $(this).css('fill', 'green');
        var newElement = $('<div class="new-element">' + 'Ávila' + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Leon") {
        $(this).css('fill', 'green');
        var newElement = $('<div class="new-element">' + 'León' + '</div>');
        $("body").append(newElement);
    }
    else {
        $(this).css('fill', 'green');
        var newElement = $('<div class="new-element">' + this.id + '</div>');
        $("body").append(newElement);
    }

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
    $("body").find('.new-element-long').remove();

})