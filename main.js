
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

$("#Castilla, #Andalusia, #Murcia, #Valencia, #Catalonia, #Extremadura, #Madrid, #Aragon, #Rioja, #Navarre, #Basque, #Cantabria, #Asturias, #Galicia, #Castille").hover(function() {
    $(this).css('fill', 'green');
    var newElement = $('<div class="new-element">' + this.id + '</div>');
    $("body").append(newElement);
}, function() {
    $(this).css('fill', 'white');
    $("body").find('.new-element').remove();
})

$("#Castilla, #Andalusia, #Murcia, #Valencia, #Catalonia, #Extremadura, #Madrid, #Aragon, #Rioja, #Navarre, #Basque, #Cantabria, #Asturias, #Galicia, #Castille").click(function() {
    if (this.id == "Castilla") {
        window.open("./Regions/CastillaMancha/Castilla.html");
    } 
    else if (this.id == "Castille") {
        window.open("./Regions/CastillaLeon/Castille.html");
    }
    else {
        window.open("./Regions/" + this.id + "/" + this.id + ".html");
    }
})