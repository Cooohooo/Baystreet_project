$(document).ready(function() {
  $("#temp").select2({
    width: "10rem",
    placeholder: "choose the region",
    allowClear: false
  });
  $("#temp").on("select2:select", function() {
    console.log("click the option", $(this).val());
  });
});
