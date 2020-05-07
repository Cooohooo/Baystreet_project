$(document).ready(function() {
  $("#datepicker").datetimepicker({
    format: "yyyy-mm-dd",
    weekStart: 1,
    startView: 2,
    bootcssVer: 1,
    minView: "month",
    autoclose: true, //选中自动关闭
    todayBtn: true //显示今日按钮
  });
  $("#a11y-ember4296").keyup(function() {
    if ($("#a11y-ember4296").val() == "") {
      $(this)
        .parent()
        .children(".type-ahead-input-icons")
        .hide();
    } else {
      $(this)
        .parent()
        .children(".type-ahead-input-icons")
        .show();
    }
  });
  $("#a11y-ember4296").focus(function() {
    if ($(this).val() != "") {
      $(this)
        .parent()
        .children(".type-ahead-input-icons")
        .show();
    }
  });
  $("#a11y-ember4296").blur(function() {
    if ($(this).val() == "") {
      $(this)
        .parent()
        .children(".type-ahead-input-icons")
        .hide();
    }
  });
  $(".type-ahead-input-icons").click(function() {
    event.preventDefault();
    $(this)
      .parent()
      .find("input")
      .val("");
    $(this).hide();
  });

  // 将建议的skill 添加到 div栏
  $(".pv-add-with-suggestions__suggested-skill .hide").click(function() {
    $(this)
      .parent()
      .hide();
    var suggestname = $(this)
      .children(".artdeco-pill__text")
      .text();
    var nameforid = suggestname.replace(/\s*/g, "");
    if ($(".pv-add-with-suggestions__added-skills-list").length > 0) {
      $(".pv-add-with-suggestions__added-skills-list").append(
        '<li class="pv-add-with-suggestions__added-skill"><button id="' +
          nameforid +
          '" class="added_amenity artdeco-pill artdeco-pill--blue artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" type="button"><span class="artdeco-pill__text">' +
          suggestname +
          '</span><li-icon aria-hidden="true" type="plus-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="currentColor" focusable="false"><path d="M15 3L6.57 13.72A.7.7 0 016 14a.72.72 0 01-.56-.27L1 8.07 2.36 7 6 11.72 13.68 2z"></path></svg></li-icon></button></li>'
      );
    } else {
      $("#ember1293").after(
        '<ul class="pv-add-with-suggestions__added-skills-list suggest_added_mt4">'
      );
      $(".pv-add-with-suggestions__added-skills-list").append(
        '<li class="pv-add-with-suggestions__added-skill"><button id="' +
          nameforid +
          '" class="added_amenity artdeco-pill artdeco-pill--blue artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" type="button"><span class="artdeco-pill__text">' +
          suggestname +
          '</span><li-icon aria-hidden="true" type="plus-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="currentColor" focusable="false"><path d="M15 3L6.57 13.72A.7.7 0 016 14a.72.72 0 01-.56-.27L1 8.07 2.36 7 6 11.72 13.68 2z"></path></svg></li-icon></button></li>'
      );
    }
  });
  // 通过回车键 将skill 添加到div栏
  $("#a11y-ember4296").keypress(function(event) {
    // 判断 用户是否摁下 回车键
    var keynum = event.keyCode ? event.keyCode : event.which;
    if (keynum == "13") {
      var inputname = $(this).val();
      var nameforid = inputname.replace(/\s*/g, "");
      console.log(nameforid);
      if ($(".pv-add-with-suggestions__added-skills-list").length > 0) {
        $(".pv-add-with-suggestions__added-skills-list").append(
          '<li class="pv-add-with-suggestions__added-skill"><button id="' +
            nameforid +
            '" class="added_amenity artdeco-pill artdeco-pill--blue artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" type="button"><span class="artdeco-pill__text">' +
            inputname +
            '</span><li-icon aria-hidden="true" type="plus-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="currentColor" focusable="false"><path d="M15 3L6.57 13.72A.7.7 0 016 14a.72.72 0 01-.56-.27L1 8.07 2.36 7 6 11.72 13.68 2z"></path></svg></li-icon></button></li>'
        );
      } else {
        $("#ember1293").after(
          '<ul class="pv-add-with-suggestions__added-skills-list suggest_added_mt4">'
        );
        $(".pv-add-with-suggestions__added-skills-list").append(
          '<li class="pv-add-with-suggestions__added-skill"><button id="' +
            nameforid +
            '" class="added_amenity artdeco-pill artdeco-pill--blue artdeco-pill--3 artdeco-pill--toggle artdeco-pill--selected ember-view" type="button"><span class="artdeco-pill__text">' +
            inputname +
            '</span><li-icon aria-hidden="true" type="plus-icon" class="artdeco-pill__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" data-supported-dps="16x16" fill="currentColor" focusable="false"><path d="M15 3L6.57 13.72A.7.7 0 016 14a.72.72 0 01-.56-.27L1 8.07 2.36 7 6 11.72 13.68 2z"></path></svg></li-icon></button></li>'
        );
      }
    }
  });
  // 将div栏中的skill 删除掉
  $(document).on("click", ".added_amenity", function(event) {
    event.preventDefault();
    var idforname = $(this).attr("id");
    console.log(idforname);
    $("." + idforname).show();
    if ($(".pv-add-with-suggestions__added-skills-list").length > 0) {
      $(this)
        .parent(".pv-add-with-suggestions__added-skill")
        .remove();
    }
  });
  $(".close_btn").click(function() {
    $(".form-control").val("");
  });
  $(document).on("click", "#moreSummary", function() {
    $("#moreSummary").hide();
    $("#check_class .summary-box-more").css({
      height: "auto!important",
      overflow: "initial",
      "text-overflow": "initial",
      "max-height": "none"
    });
    $("#lessSummary").show();
    $("#qa .content-text .summary-box-more .fadeToWhite").hide();
  });
  $(document).on("click", "#lessSummary", function() {
    $(this)
      .parent()
      .removeClass("full");
    $("#check_class .summary-box-more").css({
      overflow: "hidden",
      "text-overflow": "ellipsis",
      "max-height": "120px",
      position: "relative"
    });
    $("#moreSummary").show();
    $("#lessSummary").hide();
    $("#qa .content-text .summary-box-more .fadeToWhite").show();
  });
  $("#moreamenities").click(function() {
    if ($("#amenities").hasClass("full")) {
      $("#amenities .more").hide();
      $("#amenities .all-amenities").css({
        height: "auto!important",
        overflow: "initial",
        "text-overflow": "initial",
        "max-height": "none"
      });
      $("#amenities .less").show();
    }
  });
  $("#amenities .less").click(function() {
    if ($("#amenities").hasClass("full")) {
      $("#amenities .more").hide();
      $("#amenities .less").show();
    } else {
      $("#amenities .all-amenities").css({
        overflow: "hidden",
        "max-height": "70px"
      });
      $("#amenities .more").show();
      $("#amenities .less").hide();
    }
  });
});
