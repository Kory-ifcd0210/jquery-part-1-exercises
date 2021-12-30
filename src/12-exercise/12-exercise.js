import $ from "jquery";

function exercise12() {
  // Complete the code of the function
  let cities = ["Barcelona", "Madrid", "Sevilla"];
  let list = $("<ul class='ex-list'></ul>")

  $(".ex-wrapper").append(list).each(function(i,element){
  $(element).addClass("ex-list-item",true).append(cities[i]);
})
}

export default exercise12;
