import $ from "jquery";

function exercise17() {
  // Complete the code of the function
  $("ul").children().each(function(index, element) {
    $(element).css("font-weight", "bold");
  })
}

export default exercise17;
