$(".row img").mouseover(function(event) {

    row = event.target.classList[0][4];
    column = event.target.classList[0][5];
    console.log(".column" + column + " .row" + row + " img");
    
    $(".column" + column + " .row" + row + " img" +".done").css("scale","1.3");
    $(".column" + column + " .row" + row + " img" + ".play").addClass("show");
    $(".column" + column + " .row" + row + " img" + ".play").css("scale", "0.9");
    
  

})

$(".row img").mouseout(function(event) {

    row = event.target.classList[0][4];
    column = event.target.classList[0][5];
    console.log(".column" + column + " .row" + row + " img");
    $(".column" + column + " .row" + row + " img" +".done").css("scale","1");
    $(".column" + column + " .row" + row + " img" + ".play").css("scale", "1");
    $(".column" + column + " .row" + row + " img" + ".play").removeClass("show");


})

$(".header-2").click(function() {
    $(".header-2").css("flex", "2");
    $(".header-2").css("border-radius", "11px");

  });
  

$("h1").mouseover(function() {
    $("h1").css("background-color")
})

