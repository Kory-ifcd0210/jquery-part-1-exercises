import $ from "jquery";

function exercise14() {
  // Complete the code of the function
  if($("input").val()==""){
    $("form").append("<p>The values are empty</p>");
  }
}

export default exercise14;
