
window.onscroll = function() {myFunction()};


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 200) {
    $("nav").addClass("active");
  } else {
    $("nav").removeClass("active");
  }
}