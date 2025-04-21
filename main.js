
// $("#page").click(test);

let images = [
    "url(./images/image1.jpg)",
    "url(./images/image2.jpg)",
    "url(./images/image3.jpg)",
    "url(./images/image4.jpg)"
]

let i = 0;

(function( $ ){ 
    $.fn.myfunction= function() { 
        page.style.backgroundImage=images[i];
        page.style.backgroundSize="cover"; 
        page.style.color="black"
    }; 
})( jQuery );

let width = $("#bg1").width();
let negWidth = -1 * width;

// $("#bg1").click(function() {
//     $("#bg1").animate({
//         left: width
//     }, 3000, "swing", function() {
//         $("#bg1").css('left', negWidth);
//     })
//     $("#bg2").animate({
//         left:0
//     }, 3000, "swing")
// });

// $("#bg2").click(function() {
//     $("#bg2").animate({
//         left: width
//     }, 3000, "swing", function() {
//         $("#bg2").css('left', negWidth);
//     })
//     $("#bg3").animate({
//         left:0
//     }, 3000, "swing")
// });

// $("#bg3").click(function() {
//     $("#bg3").animate({
//         left: width
//     }, 3000, "swing", function() {
//         $("#bg3").css('left', negWidth);
//     })
//     $("#bg4").animate({
//         left:0
//     }, 3000, "swing")
// });

// $("#bg4").click(function() {
//     $("#bg4").animate({
//         left: width
//     }, 3000, "swing", function() {
//         $("#bg4").css('left', negWidth);
//     })
//     $("#bg1").animate({
//         left:0
//     }, 3000, "swing")
// });

function switch0() {
    $("#bg1").animate({
        left: width
    }, 3000, "swing", function() {
        $("#bg1").css('left', negWidth);
    })
    $("#bg2").animate({
        left:0
    }, 3000, "swing");
}

function switch1() {
    $("#bg2").animate({
        left: width
    }, 3000, "swing", function() {
        $("#bg2").css('left', negWidth);
    })
    $("#bg3").animate({
        left:0
    }, 3000, "swing");
}

function switch2() {
    $("#bg3").animate({
        left: width
    }, 3000, "swing", function() {
        $("#bg3").css('left', negWidth);
    })
    $("#bg4").animate({
        left:0
    }, 3000, "swing");
}

function switch3() {
    $("#bg4").animate({
        left: width
    }, 3000, "swing", function() {
        $("#bg4").css('left', negWidth);
    })
    $("#bg1").animate({
        left:0
    }, 3000, "swing")
}

let cur = 0;

setInterval(function() {
    if (cur == 0) {
        cur++;
        switch0();
    } else if (cur == 1) {
        cur++
        switch1();
    } else if (cur == 2) {
        cur++;
        switch2();
    } else if (cur == 3) {
        cur = 0;
        switch3();
    }
}, 4000);

$("#CastillaMancha, #Andalucia, #Murcia, #Valencia, #Catalonia, #Extremadura, #Madrid, #Aragon, #Rioja, #Navarre, #Basque, #Cantabria, #Asturias, #Galicia, #CastillaLeon, #France, #Portugal, #Morocco, #Capital, #Balearic1, #Balearic2, #Balearic3, #Balearic4, #Canary1, #Canary2, #Canary3, #Canary4, #Canary5, #Canary6, #Canary7").hover(function() {
    
    if (this.id == "France") {
        $(this).css('fill', '#382d2d');
        var newElement = $('<div class="new-element">' + this.id + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Portugal") {
        $(this).css('fill', '#382d2d');
        var newElement = $('<div class="new-element">' + this.id + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Morocco") {
        $(this).css('fill', '#382d2d');
        var newElement = $('<div class="new-element">' + this.id + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "CastillaMancha") {
        $(this).css('fill', 'green');
        var newElement = $('<div class="new-element-long">' + 'Castilla la Mancha' + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "CastillaLeon") {
        $(this).css('fill', 'green');
        var newElement = $('<div class="new-element-long">' + 'Castilla y Leon' + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Madrid") {
        $(this).css('fill', 'green');
        $("#Capital").css('fill', 'yellow');
        var newElement = $('<div class="new-element">' + this.id + '</div>');
        $("body").append(newElement);
    } else if (this.id == "Capital") {
        $(this).css('fill', 'yellow');
        var newElement = $('<div class="new-element-long">' + "Madrid (Capital)" + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Basque") {
        $(this).css('fill', 'green');
        var newElement = $('<div class="new-element-long">' + "Basque Country" + '</div>');
        $("body").append(newElement);
    }
    else if (this.id == "Balearic1" || this.id == "Balearic2" || this.id == "Balearic3" || this.id == "Balearic4") {
        $("#Balearic1").css('fill', 'green');
        $("#Balearic2").css('fill', 'green');
        $("#Balearic3").css('fill', 'green');
        $("#Balearic4").css('fill', 'green');
        var newElement = $('<div class="new-element-long">' + "Balearic Islands" + '</div>');
        $("body").append(newElement);
    } else if (this.id == "Canary1" || this.id == "Canary2" || this.id == "Canary3" || this.id == "Canary4" || this.id == "Canary5" || this.id == "Canary6" || this.id == "Canary7") {
        $("#Canary1").css('fill', 'green');
        $("#Canary2").css('fill', 'green');
        $("#Canary3").css('fill', 'green');
        $("#Canary4").css('fill', 'green');
        $("#Canary5").css('fill', 'green');
        $("#Canary6").css('fill', 'green');
        $("#Canary7").css('fill', 'green');
        var newElement = $('<div class="new-element-long">' + "Canary Islands" + '</div>');
        $("body").append(newElement);
    }
    else {
        $(this).css('fill', 'green');
        var newElement = $('<div class="new-element">' + this.id + '</div>');
        $("body").append(newElement);
    }

}, function() {

    if (this.id == "France") {
        $(this).css('fill', '#b3b3b3');
        $("body").find('.new-element').remove();
    }
    else if (this.id == "Portugal") {
        $(this).css('fill', '#b3b3b3');
        $("body").find('.new-element').remove();
    }
    else if (this.id == "Morocco") {
        $(this).css('fill', '#b3b3b3');
        $("body").find('.new-element').remove();
    }
    else if (this.id == "Madrid") {
        $(this).css('fill', 'white');
        $("#Capital").css('fill', 'white');
        $("body").find('.new-element').remove();
    }
    else if (this.id == "CastillaMancha") {
        $(this).css('fill', 'white');
        $("#Capital").css('fill', 'white');
        $("body").find('.new-element-long').remove();
    }
    else if (this.id == "CastillaLeon") {
        $(this).css('fill', 'white');
        $("#Capital").css('fill', 'white');
        $("body").find('.new-element-long').remove();
    }
    else if (this.id == "Capital") {
        $(this).css('fill', 'white');
        $("body").find('.new-element-long').remove();
    }
    else if (this.id == "Basque") {
        $(this).css('fill', 'white');
        $("body").find('.new-element-long').remove();
    }
    else if (this.id == "Balearic1" || this.id == "Balearic2" || this.id == "Balearic3" || this.id == "Balearic4") {
        $("#Balearic1").css('fill', 'white');
        $("#Balearic2").css('fill', 'white');
        $("#Balearic3").css('fill', 'white');
        $("#Balearic4").css('fill', 'white');
        $("body").find('.new-element-long').remove();
    } else if (this.id == "Canary1" || this.id == "Canary2" || this.id == "Canary3" || this.id == "Canary4" || this.id == "Canary5" || this.id == "Canary6" || this.id == "Canary7") {
        $("#Canary1").css('fill', 'white');
        $("#Canary2").css('fill', 'white');
        $("#Canary3").css('fill', 'white');
        $("#Canary4").css('fill', 'white');
        $("#Canary5").css('fill', 'white');
        $("#Canary6").css('fill', 'white');
        $("#Canary7").css('fill', 'white');
        $("body").find('.new-element-long').remove();
    }
    else {
        $(this).css('fill', 'white');
        $("body").find('.new-element').remove();
    }

})

$("#CastillaMancha, #Andalucia, #Murcia, #Valencia, #Catalonia, #Extremadura, #Madrid, #Aragon, #Rioja, #Navarre, #Basque, #Cantabria, #Asturias, #Galicia, #CastillaLeon, #Balearic1, #Balearic2, #Balearic3, #Balearic4, #Canary1, #Canary2, #Canary3, #Canary4, #Canary5, #Canary6, #Canary7").click(function() {
    if (this.id == "CastillaMancha") {
        window.open("./Regions/CastillaMancha/Castilla.html");
    } 
    else if (this.id == "CastillaLeon") {
        window.open("./Regions/CastillaLeon/Castille.html");
    } else if (this.id == "Andalucia") {
        window.open("./Regions/Andalusia/Andalusia.html");
    }
    else if (this.id == "Balearic1" || this.id == "Balearic2" || this.id == "Balearic3" || this.id == "Balearic4") {
        window.open("./Regions/Balearic/Balearic.html");
    } else if (this.id == "Canary1" || this.id == "Canary2" || this.id == "Canary3" || this.id == "Canary4" || this.id == "Canary5" || this.id == "Canary6" || this.id == "Canary7") {
        window.open("./Regions/Canary/Canary.html");
    }
    else {
        window.open("./Regions/" + this.id + "/" + this.id + ".html");
    }
})
