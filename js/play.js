"use script";

// $(function () {
//     $("#playButton").click(function () {
//         $("#playOutput").text($("#playInput").val());
//     })
//     $(".important").mouseover(function () {
//         $(this).css("background-color", "yellow");
//     })
//     $("#green").click(function(){
//         alert("The paragraph was clicked.");
//     });
//     $(".codeup").css("border","1px solid red");
//
//     $("li").css("font-size", "20px");
//
//     $("li, p, h1").css("background-color", "lime");
//
//     // $("p").css("background-color", "#ff69b4");
//     //
//     // $("h1").css("background-color", "cyan");
//
//     $("body").css("font-family", "Orbitron", "sans-serif");
//
// });

$("xyz").trigger("play");

$('h1').click(function() {
    $("h1").css("background-color", "lime");

});




$('p').dblclick(function() {
    $("p").css("font-size", "18px");
});

$('ul').hover(
    function() {
        $("li").css('color', 'red');
    },
    function() {
        $("li").css('color', 'black');
    }
);

