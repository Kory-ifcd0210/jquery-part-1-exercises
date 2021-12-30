import $ from "jquery";

function exercise09() {
  // Complete the code of the function
  let newSrc=$("img").data("lazy");
  $("img").attr("src", newSrc);
  $("img").removeAttr("data-lazy").removeData();
}

export default exercise09;
