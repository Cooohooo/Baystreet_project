$(document).ready(function() {
  var tempobj = [];

  function select_personaldetails(event) {
    data = {
      communityname: $("#condo_title").text()
    };
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8000/select_personaldetails",
      crossDomin: true,
      data: data,
      dataType: "json",
      success: function(result) {
        $("#update_date").append(result.result[0].update_date);
        $("#communityname").append(result.result[0].project_name);
        $("#address1").append(result.result[0].address);
        $("#intersection").append(result.result[0].intersection);
        $("#estimated_completion").append(
          result.result[0].estimated_completion
        );
        $("#construction_status").append(result.result[0].construction_status);
        $("#total_stories").append(result.result[0].total_stories);
        $("#total_units").append(result.result[0].total_units);
        $("#unit_types").append(result.result[0].unit_types);
        $("#builders").append(result.result[0].builders);
        $("#building_type").append(result.result[0].building_type);
        $("#clear_view").append(result.result[0].clear_view);
      },
      error: function() {
        console.log("没有从服务器传回selected正确的数据");
      }
    });
  }
  function select_priceandfee(event) {
    data = {
      communityname: $("#condo_title").text()
    };
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8000/select_priceandfee",
      crossDomin: true,
      data: data,
      dataType: "json",
      success: function(result) {
        console.log(result);
        // 筛选出数据库中 price and fee 中的对应项
        $("#sale_price").append(result.result[0].sales_price);
        $("#parking").append(result.result[0].parking);
        $("#locker").append(result.result[0].locker);
        $("#assignment").append(result.result[0].assignment);
        $("#psf").append(result.result[0].psf);
        $("#cappedlevy").append(result.result[0].capped_levy);
      },
      error: function() {
        console.log("没有从服务器传回selected正确的数据");
      }
    });
  }
  function select_dapositstructure(event) {
    data = {
      communityname: $("#condo_title").text()
    };
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8000/select_depositstructure",
      crossDomin: true,
      data: data,
      dataType: "json",
      success: function(result) {
        console.log(result);
        // 筛选出数据库中 price and fee 中的对应项
        $("#deposit_structure").append(result.result[0].deposit_structure);
      },
      error: function() {
        console.log("没有从服务器传回selected正确的数据");
      }
    });
  }
  function select_qa(event) {
    data = {
      communityname: $("#condo_title").text()
    };
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8000/select_qa",
      crossDomin: true,
      data: data,
      dataType: "json",
      success: function(result) {
        console.log(result);
        // 筛选出数据库中 price and fee 中的对应项
        $("#qanda").append(result.result[0].qa);
      },
      error: function() {
        console.log("没有从服务器传回selected正确的数据");
      }
    });
  }
  function select_nrp(event) {
    data = {
      communityname: $("#condo_title").text()
    };
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8000/select_nrp",
      crossDomin: true,
      data: data,
      dataType: "json",
      success: function(result) {
        console.log(result);
        // 筛选出数据库中 price and fee 中的对应项
        $("#nrp").append(result.result[0].neighbor_rental);
      },
      error: function() {
        console.log("没有从服务器传回selected正确的数据");
      }
    });
  }
  function select_nrs(event) {
    data = {
      communityname: $("#condo_title").text()
    };
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8000/select_nrs",
      crossDomin: true,
      data: data,
      dataType: "json",
      success: function(result) {
        console.log(result);
        $("#nrs").append(result.result[0].neighbor_sale);
      },
      error: function() {
        console.log("没有从服务器传回selected正确的数据");
      }
    });
  }
  function select_amenity(event) {
    data = {
      communityname: $("#condo_title").text()
    };
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8000/select_amenity",
      crossDomin: true,
      data: data,
      dataType: "json",
      success: function(result) {
        console.log(result.result[0].amenities);
        // 筛选出数据库中 amenity 中的对应项
      },
      error: function() {
        console.log("没有从服务器传回selected正确的数据");
      }
    });
  }

  $(document).on("click", ".save_change_details", function(event) {
    var builders_r,
      buildingtype_r,
      totalstories_r,
      totalunit_r,
      unittype_r,
      unitsize_r,
      address_r,
      intersection_r,
      estcompletion_r,
      constatus_r;
    // $("#clearview").val(cleartemp);
    // var temp = $("#personal_details").serializeArray();
    // var jsontemp = JSON.stringify(temp);
    var cleartemp = $("#clearview")
      .val()
      .replace(/\n|\r\n/g, "<br />");
    // 还需要吧 <br ><br >换成 单个<br >
    // var dateReg = /^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/;
    // var temp = $("#datepicker").val();
    // if (!dateReg.test(temp)) {
    //   $("#datepicker").val("");
    //   alert("wrong format");
    //   return false;
    // } else {
    //   updatedate_r = $("#datepicker")
    //     .val()
    //     .replace("\\", "");
    //   updatedate_r = $("#datepicker")
    //     .val()
    //     .replace("'", "");
    //   updatedate_r = $("#datepicker")
    //     .val()
    //     .replace('"', "");
    //   updatedate_r = $("#datepicker")
    //     .val()
    //     .replace(chr(0), "");
    // }
    if (
      $("#builders_modal")
        .val()
        .indexOf("'") >= 0
    ) {
      builders_r = $("#builders_modal")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#builders_modal")
        .val()
        .indexOf('"') >= 0
    ) {
      builders_r = $("#builders_modal")
        .val()
        .replace('"', '\\"');
    } else if (
      $("#builders_modal")
        .val()
        .indexOf("\\") >= 0
    ) {
      builders_r = $("#builders_modal")
        .val()
        .replace("\\", "\\\\");
    } else {
      builders_r = $("#builders_modal").val();
    }

    if (
      $("#buildingtype")
        .val()
        .indexOf("'") >= 0
    ) {
      buildingtype_r = $("#buildingtype")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#buildingtype")
        .val()
        .indexOf("\\") >= 0
    ) {
      buildingtype_r = $("#buildingtype")
        .val()
        .replace("\\", "\\\\");
    } else if (
      $("#buildingtype")
        .val()
        .indexOf('"') >= 0
    ) {
      buildingtype_r = $("#buildingtype")
        .val()
        .replace('"', '\\"');
    } else {
      buildingtype_r = $("#buildingtype").val();
    }

    if (
      $("#totalstories")
        .val()
        .indexOf("\\") >= 0
    ) {
      totalstories_r = $("#totalstories")
        .val()
        .replace("\\", "\\\\");
    } else if (
      $("#totalstories")
        .val()
        .indexOf("'") >= 0
    ) {
      totalstories_r = $("#totalstories")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#totalstories")
        .val()
        .indexOf('"') >= 0
    ) {
      totalstories_r = $("#totalstories")
        .val()
        .replace('"', '\\"');
    } else {
      totalstories_r = $("#totalstories").val();
    }

    if (
      $("#totalunit")
        .val()
        .indexOf("\\") >= 0
    ) {
      totalunit_r = $("#totalunit")
        .val()
        .replace("\\", "\\\\");
    } else if (
      $("#totalunit")
        .val()
        .indexOf("'") >= 0
    ) {
      totalunit_r = $("#totalunit")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#totalunit")
        .val()
        .indexOf('"') >= 0
    ) {
      totalunit_r = $("#totalunit")
        .val()
        .replace('"', '\\"');
    } else {
      totalunit_r = $("#totalunit").val();
    }

    if (
      $("#unittype")
        .val()
        .indexOf("\\") >= 0
    ) {
      unittype_r = $("#unittype")
        .val()
        .replace("\\", "\\\\");
    } else if (
      $("#unittype")
        .val()
        .indexOf("'") >= 0
    ) {
      unittype_r = $("#unittype")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#unittype")
        .val()
        .indexOf('"') >= 0
    ) {
      unittype_r = $("#unittype")
        .val()
        .replace('"', '\\"');
    } else {
      unittype_r = $("#unittype").val();
    }

    if (
      $("#unitsize")
        .val()
        .indexOf("\\") >= 0
    ) {
      unitsize_r = $("#unitsize")
        .val()
        .replace("\\", "\\\\");
    } else if (
      $("#unitsize")
        .val()
        .indexOf("'") >= 0
    ) {
      unitsize_r = $("#unitsize")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#unitsize")
        .val()
        .indexOf('"') >= 0
    ) {
      unitsize_r = $("#unitsize")
        .val()
        .replace('"', '\\"');
    } else {
      unitsize_r = $("#unitsize").val();
    }

    if (
      $("#address")
        .val()
        .indexOf("\\") >= 0
    ) {
      address_r = $("#address")
        .val()
        .replace("\\", "\\\\");
    } else if (
      $("#address")
        .val()
        .indexOf("'") >= 0
    ) {
      address_r = $("#address")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#address")
        .val()
        .indexOf('"') >= 0
    ) {
      address_r = $("#address")
        .val()
        .replace('"', '\\"');
    } else {
      address_r = $("#address").val();
    }

    if (
      $("#intersection_modal")
        .val()
        .indexOf("\\") >= 0
    ) {
      intersection_r = $("#intersection_modal")
        .val()
        .replace("\\", "\\\\");
    } else if (
      $("#intersection_modal")
        .val()
        .indexOf("'") >= 0
    ) {
      intersection_r = $("#intersection_modal")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#intersection_modal")
        .val()
        .indexOf('"') >= 0
    ) {
      intersection_r = $("#intersection_modal")
        .val()
        .replace('"', '\\"');
    } else {
      intersection_r = $("#intersection_modal").val();
    }

    if (
      $("#estcompletion")
        .val()
        .indexOf("\\") >= 0
    ) {
      estcompletion_r = $("#estcompletion")
        .val()
        .replace("\\", "\\\\");
    } else if (
      $("#estcompletion")
        .val()
        .indexOf("'") >= 0
    ) {
      estcompletion_r = $("#estcompletion")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#estcompletion")
        .val()
        .indexOf('"') >= 0
    ) {
      estcompletion_r = $("#estcompletion")
        .val()
        .replace('"', '\\"');
    } else {
      estcompletion_r = $("#estcompletion").val();
    }

    if (
      $("#constatus")
        .val()
        .indexOf("\\") >= 0
    ) {
      constatus_r = $("#constatus")
        .val()
        .replace("\\", "\\\\");
    } else if (
      $("#constatus")
        .val()
        .indexOf("'") >= 0
    ) {
      constatus_r = $("#constatus")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#constatus")
        .val()
        .indexOf('"') >= 0
    ) {
      constatus_r = $("#constatus")
        .val()
        .replace('"', '\\"');
    } else {
      constatus_r = $("#constatus").val();
    }

    jsontemp = {
      communityname: $("#condo_title").text(),
      updatedate: $("#datepicker").val(),
      builders: builders_r,
      buildingtype: buildingtype_r,
      totalstories: totalstories_r,
      totalunits: totalunit_r,
      unittype: unittype_r,
      unitsize: unitsize_r,
      address: address_r,
      intersection: intersection_r,
      estcompletion: estcompletion_r,
      constatus: constatus_r,
      clearview: cleartemp
    };

    // 传输之前需要进行 表单数据的判断 以防恶意篡改数据库数据
    // 需要对用户进行分离 没登录的用户没有权限
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:8000/personaldetails",
      crossDomin: true,
      data: jsontemp,
      dataType: "json",
      success: function(result) {
        // 将后端传回来的数据更新在 前端相应的数据框里
        select_personaldetails();
      },
      error: function() {
        console.log("没有从服务器传回personal detail正确的数据");
      }
    });
  });
  $(document).on("click", ".close_btn_details, #close_details", function(
    event
  ) {
    $("#name_detail").val("");
    $("#datepicker").val("");
    $("#builders_modal").val("");
    $("#buildingtype").val("");
    $("#totalstories").val("");
    $("#totalunit").val("");
    $("#unittype").val("");
    $("#unitsize").val("");
    $("#address").val("");
    $("#intersection_modal").val("");
    $("#estcompletion").val("");
    $("#constatus").val("");
    $("#clearview").val("");
  });
  $(document).on("click", ".save_change_price", function(event) {
    var cappedtemp = $("#cappedlevy_modal")
      .val()
      .replace(/\n|\r\n/g, "<br />");

    var saleprice_r, parking_r, locker_r, assignment_r, psf_r;

    if (
      $("#name_price")
        .val()
        .indexOf("'") >= 0
    ) {
      saleprice_r = $("#name_price")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#name_price")
        .val()
        .indexOf('"') >= 0
    ) {
      saleprice_r = $("#name_price")
        .val()
        .replace('"', '\\"');
    } else if (
      $("#name_price")
        .val()
        .indexOf("\\") >= 0
    ) {
      saleprice_r = $("#name_price")
        .val()
        .replace("\\", "\\\\");
    } else {
      saleprice_r = $("#name_price").val();
    }

    if (
      $("#parking_modal")
        .val()
        .indexOf("'") >= 0
    ) {
      parking_r = $("#parking_modal")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#parking_modal")
        .val()
        .indexOf('"') >= 0
    ) {
      parking_r = $("#parking_modal")
        .val()
        .replace('"', '\\"');
    } else if (
      $("#parking_modal")
        .val()
        .indexOf("\\") >= 0
    ) {
      parking_r = $("#parking_modal")
        .val()
        .replace("\\", "\\\\");
    } else {
      parking_r = $("#parking_modal").val();
    }

    if (
      $("#locker_modal")
        .val()
        .indexOf("'") >= 0
    ) {
      locker_r = $("#locker_modal")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#locker_modal")
        .val()
        .indexOf('"') >= 0
    ) {
      locker_r = $("#locker_modal")
        .val()
        .replace('"', '\\"');
    } else if (
      $("#locker_modal")
        .val()
        .indexOf("\\") >= 0
    ) {
      locker_r = $("#locker_modal")
        .val()
        .replace("\\", "\\\\");
    } else {
      locker_r = $("#locker_modal").val();
    }

    if (
      $("#assignment_modal")
        .val()
        .indexOf("'") >= 0
    ) {
      assignment_r = $("#assignment_modal")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#assignment_modal")
        .val()
        .indexOf('"') >= 0
    ) {
      assignment_r = $("#assignment_modal")
        .val()
        .replace('"', '\\"');
    } else if (
      $("#assignment_modal")
        .val()
        .indexOf("\\") >= 0
    ) {
      assignment_r = $("#assignment_modal")
        .val()
        .replace("\\", "\\\\");
    } else {
      assignment_r = $("#assignment_modal").val();
    }

    if (
      $("#psf_modal")
        .val()
        .indexOf("'") >= 0
    ) {
      psf_r = $("#psf_modal")
        .val()
        .replace("'", "\\'");
    } else if (
      $("#psf_modal")
        .val()
        .indexOf('"') >= 0
    ) {
      psf_r = $("#psf_modal")
        .val()
        .replace('"', '\\"');
    } else if (
      $("#psf_modal")
        .val()
        .indexOf("\\") >= 0
    ) {
      psf_r = $("#psf_modal")
        .val()
        .replace("\\", "\\\\");
    } else {
      psf_r = $("#psf_modal").val();
    }

    var jsontemp = {
      communityname: $("#condo_title").text(),
      saleprice: saleprice_r,
      parking: parking_r,
      locker: locker_r,
      assignment: assignment_r,
      psf: psf_r,
      cappedlevy: cappedtemp
    };
    console.log(jsontemp);
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:8000/priceandfee",
      crossDomin: true,
      data: jsontemp,
      dataType: "json",
      success: function(result) {
        alert(result.datafetch);
        select_priceandfee();
      },
      error: function() {
        console.log("没有从服务器传回正确的数据");
      }
    });
  });
  $(document).on("click", ".close_btn_price, #close_price", function(event) {
    $("#name_price").val("");
    $("#parking_modal").val("");
    $("#locker_modal").val("");
    $("#assignment_modal").val("");
    $("#psf_modal").val("");
    $("#cappedlevy_modal").val("");
  });
  $(document).on("click", ".save_change_structure", function(event) {
    var depositstructuretemp = $("#depositstructure")
      .val()
      .replace(/\n\n|\r\n/g, "<br />");
    var jsontemp = {
      communityname: $("#condo_title").text(),
      depositstructure: depositstructuretemp
    };
    console.log(jsontemp);
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:8000/depositstructure",
      crossDomin: true,
      data: jsontemp,
      dataType: "json",
      success: function(result) {
        alert(result.datafetch);
        select_dapositstructure();
      },
      error: function() {
        console.log("没有从服务器传回正确的数据");
      }
    });
  });
  $(document).on("click", ".close_btn_structure, #close_stucture", function(
    event
  ) {
    $("#depositstructure").val("");
  });
  $(document).on("click", ".save_change_qa", function(event) {
    var qa = $("#questionandanswer")
      .val()
      .replace(/\n\n|\r\n/g, "<br />");
    var jsontemp = {
      communityname: $("#condo_title").text(),
      qa: qa
    };
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:8000/questionandanswer",
      crossDomin: true,
      data: jsontemp,
      dataType: "json",
      success: function(result) {
        alert(result.datafetch);
        select_qa();
      },
      error: function() {
        console.log("没有从服务器传回正确的数据");
      }
    });
  });
  $(document).on("click", ".close_btn_qa, #close_qa", function(event) {
    $("#questionandanswer").val("");
  });
  $(document).on("click", ".save_change_nrp", function(event) {
    var nrp = $("#nrp_modal")
      .val()
      .replace(/\n|\r\n/g, "<br />");
    var jsontemp = {
      communityname: $("#condo_title").text(),
      neighbourhood_rental_price: nrp
    };
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:8000/neighbourhood_rental_price",
      crossDomin: true,
      data: jsontemp,
      dataType: "json",
      success: function(result) {
        alert(result.datafetch);
        select_nrp();
      },
      error: function() {
        console.log("没有从服务器传回正确的数据");
      }
    });
  });
  $(document).on("click", ".close_btn_nrp, #close_rental", function(event) {
    $("#nrp_modal").val("");
  });
  $(document).on("click", ".save_change_nrs", function(event) {
    var nrs = $("#nrs_modal")
      .val()
      .replace(/\n|\r\n/g, "<br />");
    var jsontemp = {
      communityname: $("#condo_title").text(),
      neighbourhood_condo_for_sale: nrs
    };
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:8000/neighbourhood_condo_for_sale",
      crossDomin: true,
      data: jsontemp,
      dataType: "json",
      success: function(result) {
        alert(result.datafetch);
        select_nrs();
      },
      error: function() {
        console.log("没有从服务器传回正确的数据");
      }
    });
  });
  $(document).on("click", ".close_btn_nrs, #close_sale", function(event) {
    $("#nrs_modal").val("");
  });
  $(document).on("click", ".save_change_amenity", function(event) {
    event.preventDefault();
    if ($(".pv-add-with-suggestions__added-skill").length > 0) {
      $(".pv-add-with-suggestions__added-skill").each(function() {
        var temp = $(this)
          .find("span")
          .text();
        tempobj.push(temp);
      });
      var jsontemp = {
        communityname: $("#condo_title").text(),
        amenities: tempobj
      };
      console.log(jsontemp.amenities);

      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/amenities",
        crossDomin: true,
        data: jsontemp,
        dataType: "json",
        success: function(result) {
          alert(result.datafetch);
          select_amenity();
        },
        error: function() {
          console.log("没有从服务器传回正确的数据");
        }
      });
      tempobj = [];
      $("input").val("");
      $(".type-ahead-input-icons").hide();
      $(".pv-add-with-suggestions__suggested-skill").show();
      $(".pv-add-with-suggestions__added-skills-list").remove();
    } else {
      console.log("nothing");
    }
  });
  $(document).on("click", ".cancel_amenities, .close_amenities", function(
    event
  ) {
    $("input").val("");
    $(".type-ahead-input-icons").hide();
    $(".pv-add-with-suggestions__suggested-skill").show();
    $(".pv-add-with-suggestions__added-skills-list").remove();
  });
});
