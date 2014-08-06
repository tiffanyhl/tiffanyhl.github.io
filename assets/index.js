$(document).ready(function() {

$('.section').waypoint(function(event, direction) {
  if (direction === "down") {
      $(this).css("background-color", "#8ed0bd");
  }
}, { offset: '25%'});

});