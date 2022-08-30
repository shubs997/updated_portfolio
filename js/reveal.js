$("document").ready(function() {
    $width1 = $(".other.jey").css("width");
    $width2 = $(".other.ef").css("width");

    $(".other").animate({
        width: '0px',
        opacity: 0,
        easing: "easein",
    }, 0);

    $("#wrapper").mouseleave(function() {

        $(".other").stop().animate({
            width: "0px",
            opacity: 0,
            easing: "easein",
        }, 800);

        $("#wrapper").stop().animate({
            width: '155px',
        }, 800);
    });

    $("#wrapper").mouseenter(function() {

        $(".other.jey").stop().animate({
            width: $width1,
            opacity: '100',
            easing: "easein",
        }, 800);

        $(".other.ef").stop().animate({
            width: $width2,
            opacity: '100',
            easing: "easein",
        }, 800);

        $("#wrapper").stop().animate({
            width: '320px',
        }, 800);
    });

});

$("#section1").mouseenter(function() {
    $("#dot1").css("background", "#00ffa9");
    $("#dot1").css("transform", "scale(1.8)");
}).mouseleave(function() {
    $("#dot1").css("background", "transparent");
    $("#dot1").css("transform", "scale(1)");
});

$("#section2").mouseenter(function() {
    $("#dot2").css("background", "#00ffa9");
    $("#dot2").css("transform", "scale(1.8)");
}).mouseleave(function() {
    $("#dot2").css("background", "transparent");
    $("#dot2").css("transform", "scale(1)");
});

$("#section3").mouseenter(function() {
    $("#dot3").css("background", "#00ffa9");
    $("#dot3").css("transform", "scale(1.8)");
}).mouseleave(function() {
    $("#dot3").css("background", "transparent");
    $("#dot3").css("transform", "scale(1)");
});

$("#section4").mouseenter(function() {
    $("#dot4").css("background", "#00ffa9");
    $("#dot4").css("transform", "scale(1.8)");
}).mouseleave(function() {
    $("#dot4").css("background", "transparent");
    $("#dot4").css("transform", "scale(1)");
});