anime({
    targets: 'ul li',
    translateY: [30, 0],
    opacity: [0, 1],
    delay: anime.stagger(100, { start: 300 }),
});


// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
});

$(document).ready(function() {
    $('body').addClass('body-loaded');
    // $('.transition').addClass('body-loaded');
});


function myFunction() {
    var url = $(this).attr('href');
    setTimeout(function() {
        window.location.href = "home.html";
    }, 500);
}

function backNavigation() {
    var url = $(this).attr('href');
    setTimeout(function() {
        history.go(-1);
    }, 500);
}


/* function for contact page to copy email to clipboard and display "copied!" msg */
function copyToClipboard() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.opacity = 1;
    tooltip.innerHTML = 'Copied!';
    navigator.clipboard.writeText("shubhamjadhav5678@gmail.com");

    setTimeout(function() {
        tooltip.style.opacity = 0;
    }, 1000);
}


/* function for contact page to show toltip on hover over social icons*/
function tooltipVis(event) {
    var info = event.target.querySelector('span');
    info.style.opacity = 1;
    info.innerHTML = event.target.title;
    console.log(event.target.querySelector('span'));
}

function tooltipInvis(event) {
    var info = event.target.querySelector('span');
    info.style.opacity = 0;
}

$('a').click(function(event) {
    var url = $(this).attr('href');
    event.preventDefault();
    $('body').addClass('body-loader');
    // $('.transition').addClass('body-loader');
    anime({
        targets: 'ul li',
        translateY: [0, -30],
        opacity: [1, 0],
        delay: anime.stagger(100, { start: 0 }),
    });


    setTimeout(function() {

        window.location.href = url;

    }, 500);




});