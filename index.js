// for (i = 0; document.querySelectorAll("button").length; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "blue"
//     })
// }

// $("button").click(function() {
//     $("h1").css("color", "blue")
// })

// $("input").keypress(function(event) {
//     $("h1").text(event.key)
// })


///////ON method//////
// $("h1").on("mouseover", function() {
//     $("h1").css("color","blue")
// })

// $("button").on("click", function() {
//     $("h1").toggle()
// })

// $("button").on("click", function() {
//     $("h1").fadeOut()
// })

// $("button").on("click", function() {
//     $("h1").fadeToggle()
// })

// $("button").on("click", function() {
//     $("h1").slideOut()
// })

$("button").on("click", function() {
    $("h1").slideToggle()
})






// $("h1").addEventListener("click", function() {
//     $("h1").style.color = "green"
// });

// $("h1").css("color", "red");
// $("h1").css("font-size", "50px")

// $("h1").addClass("big-title");

// $("h1").text("BYE");
// $("button").text("Dont Click Me");
// $("button").html("<em>I have changed</>")