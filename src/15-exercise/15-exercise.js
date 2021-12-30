import $ from "jquery";

function exercise15() {
  // Complete the code of the function
  $("#contact_form").on("submit", function(){
    $("#contact_form").append("<p>"+$("#name").val()+", "+$("#email").val()+ "</p>");
  })

}
//Funciona pero no pasa el test
export default exercise15;
