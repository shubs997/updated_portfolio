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