import $ from "jquery";

function exercise20() {
  // Complete the code of the function
  $("ul").children().each(function(index, element) {
  $(element).not(".excluded").css("background-color", "red");
})
}

export default exercise20;
