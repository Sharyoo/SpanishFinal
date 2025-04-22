$("#Teruel, #Zaragoza, #Huesca, #Capital").hover(function() {
    
    if (this.id == "Zaragoza") {
        $(this).css('fill', 'green');
        $("#Capital").css('fill', 'yellow');
        var newElement = $('<div class="new-element">' + this.id + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Capital") {
        $(this).css('fill', 'yellow');
        var newElement = $('<div class="new-element-long">' + 'Zaragoza (La capital)' + '</div>');
        $("body").append(newElement);
    }
    else {
        $(this).css('fill', 'green');
        var newElement = $('<div class="new-element">' + this.id + '</div>');
        $("body").append(newElement);
    }

}, function() {

    if (this.id == "Zaragoza") {
        $("#Capital").css('fill', 'white');
    }

    $(this).css('fill', 'white');
    $("body").find('.new-element').remove();
    $("body").find('.new-element-long').remove();
})