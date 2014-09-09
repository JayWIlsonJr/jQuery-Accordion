$(".heading").click(function() {
  $(".holder").removeClass("visible");
  $(this).next().toggleClass("visible");
});