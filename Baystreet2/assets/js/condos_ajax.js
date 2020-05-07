$(document).ready(function() {
  // RETURN AVG_PSF OF ALL CONDOS
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_nordic",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      updates += result[0].Updates;
      $("#psf_nordic").append(avg_psf);
      $("#nordic_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_stanley",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      updates += result[0].Updates;
      $("#psf_stanley").append(avg_psf);
      $("#stanley_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_eightc",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      updates += result[0].Updates;
      $("#psf_8c").append(avg_psf);
      $("#8c_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_tfh",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      updates += result[0].Updates;
      $("#tfh_date").append(updates);
      $("#psf_tfh").append(avg_psf);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_reunion",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#reunion_date").append(updates);
      $("#psf_reunion").append(avg_psf);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_inde",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_inde").append(avg_psf);
      $("#inde_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_unitedbldg",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_unitedbldg").append(avg_psf);
      $("#unitedbldg_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_clairw",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_clairw").append(avg_psf);
      $("#clairw_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_ms",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_ms").append(avg_psf);
      $("#ms_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_rf",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_rf").append(avg_psf);
      $("#rf_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_nottinghill",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_nottinghill").append(avg_psf);
      $("#nottinghill_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_cgtower",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_cg").append(avg_psf);
      $("#cg_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_galleria02",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_galleria02").append(avg_psf);
      $("#galleria02_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_broadway",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_65broadway").append(avg_psf);
      $("#65broadway_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_crosstown",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_crosstown").append(avg_psf);
      $("#crosstown_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_lakesuite",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_lakesuite").append(avg_psf);
      $("#lakesuite_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_oakco",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_oakco").append(avg_psf);
      $("#oakco_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_ksquare",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_ksquare").append(avg_psf);
      $("#ksquare_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_eighthaus",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_8haus").append(avg_psf);
      $("#8haus_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_fiftyfivec",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_55c").append(avg_psf);
      $("#55c_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_thebranch",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' + "$" + result[0].AVG_PSF + "</p>";
      $("#psf_thebranch").append(avg_psf);
      $("#thebranch_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_kingwest",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_357kingw").append(avg_psf);
      $("#357kingw_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_tszorra",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_36zorra").append(avg_psf);
      $("#36zorra_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_anx",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_anx").append(avg_psf);
      $("#anx_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_themackenzie",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_themackenzie").append(avg_psf);
      $("#themackenzie_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_eightyonge",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_8888yonge").append(avg_psf);
      $("#8888yonge_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_edgetowerone",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_edgetower1").append(avg_psf);
      $("#edgetower1_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_edgetowertwo",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_edgetower2").append(avg_psf);
      $("#edgetower2_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_oneyonge",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_oneyonge").append(avg_psf);
      $("#oneyonge_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_lawrence",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_250lawrence").append(avg_psf);
      $("#250lawrence_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_tanu",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_tanu").append(avg_psf);
      $("#taun_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_uppersky",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_uppersky").append(avg_psf);
      $("#uppersky_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_margo",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_margo").append(avg_psf);
      $("#margo_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_ppt",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_ppt").append(avg_psf);
      $("#ppt_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_azura",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_azura").append(avg_psf);
      $("#azura_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_thesaint",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_thesaint").append(avg_psf);
      $("#thesaint_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_wsedge",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_wsedge").append(avg_psf);
      $("#wsedge_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_nothirtyone",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_no31").append(avg_psf);
      $("#no31_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_sugarwharfw",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_sugarwharfw").append(avg_psf);
      $("#sugarwharfw_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_bondonyonge",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_thebondonyonge").append(avg_psf);
      $("#thebondonyonge_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_extwo",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_extwo").append(avg_psf);
      $("#extwo_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_thornhill",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_thethornhill").append(avg_psf);
      $("#thethornhill_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_pearl",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_pearl").append(avg_psf);
      $("#pearl_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_monde",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_monde").append(avg_psf);
      $("#monde_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_ys",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_ys").append(avg_psf);
      $("#ys_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_rv",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_rv").append(avg_psf);
      $("#rv_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_st",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_skytower").append(avg_psf);
      $("#skytower_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_thepoint",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_thepoint").append(avg_psf);
      $("#thepoint_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_thepeak",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_thepeak").append(avg_psf);
      $("#thepeak_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_lumina",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_lumina").append(avg_psf);
      $("#lumina_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_lighthouse",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_lighthouse").append(avg_psf);
      $("#lighthouse_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_portland",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_portland").append(avg_psf);
      $("#portland_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_yorkville",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_yorkville").append(avg_psf);
      $("#yorkville_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_empiremaven",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_empiremaven").append(avg_psf);
      $("#empiremaven_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_e2",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_e2").append(avg_psf);
      $("#e2_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_sxswt2",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_sxswt2").append(avg_psf);
      $("#sxswt2_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_sxsw",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_sxsw").append(avg_psf);
      $("#sxsw_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_xo",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_xo").append(avg_psf);
      $("#xo_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_untitled",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_untitled").append(avg_psf);
      $("#untitled_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_elgineast",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_elgineast").append(avg_psf);
      $("#elgineast_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_next",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_next").append(avg_psf);
      $("#next_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_55mercer",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_55mercer").append(avg_psf);
      $("#55mercer_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_lmt",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_lmt").append(avg_psf);
      $("#lmt_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/avg_psf_88queen",
    dataType: "json",
    success: function(result) {
      avg_psf = "";
      updates = "";
      updates += result[0].Updates;
      avg_psf +=
        '<p style="font-style: oblique">' +
        "$" +
        "&nbsp;" +
        result[0].AVG_PSF +
        "</p>";
      $("#psf_88queen").append(avg_psf);
      $("#88queen_date").append(updates);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });

  // 88 QUEEN DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/88queen",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#88queen").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // LIBERTY MARKET TOWER DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/lmt",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#lmt").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 55MERCER DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/55mercer",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#55mercer").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // NEXT-ELGIN EAST DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/next",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#next").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // ELGIN EAST DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/elgineast",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#elgineast").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // UNTITLED DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/untitled",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#untitled").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // XO DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/xo",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#xo").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // SXSW DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sxsw",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#sxsw").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // SXSW T2 DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sxswt2",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#sxswt2").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // E2 DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/e2",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#e2").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // EMPIRE MAVEN DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/empiremaven",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#empiremaven").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 11 YORKVILLE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/yorkville",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#yorkville").DataTable({
        language: lang,
        lengthMenu: [25, 50, 100],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 123 PORTLAND DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/portland",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#portland").DataTable({
        language: lang,
        lengthMenu: [10, 20, 30],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // LIGHTHOUSE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/lighthouse",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#lighthouse").DataTable({
        language: lang,
        lengthMenu: [10, 20, 30],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // NORDIC DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/nordic",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#nordic").DataTable({
        language: lang,
        lengthMenu: [10, 20, 30],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 8C DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/eightc",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#8c").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 8HAUS DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/eighthaus",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#8haus").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 36ZORRA DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/tszorra",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#36zorra").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 55C DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/fiftyfivec",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#55c").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 65BROADWAY DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/broadway",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#65broadway").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 250LAWRENCE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/lawrence",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#250lawrence").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  //357KING DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/kingwest",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#357king").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 900CLAIR DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/clairw",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#900clair").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // 8888YONGE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/eightyonge",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#8888yonge").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // ANX DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/anx",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#anx").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // AZURA DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/azura",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#azura").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // CGTOWER DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/cgtower",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#cgtower").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // CROSSTOWN DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/crosstown",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#crosstown").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // EDGETOWER1 DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/edgetowerone",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#edget1").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // EDGETOWER2 DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/edgetowertwo",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#edget2").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // EX2 DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/extwo",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#ex2").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // GALLERIA02 DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/galleria02",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#galleria02").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // INDE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/inde",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#inde").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // KSQUARE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/ksquare",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#ksquare").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // LAKESUITE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/lakesuite",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#lakesuite").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // LUMINA DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/lumina",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#lumina").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // MARGO DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/margo",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#margo").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // MARKHAM SQUARE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/ms",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#markhamsquare").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // MONDE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/monde",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#monde").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // NO31 DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/nothirtyone",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#no31").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // NOTTING HILL DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/nottinghill",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#nottinghill").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // OAKCO DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/oakco",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#oakco").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // ONE YONGE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/oneyonge",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#oneyonge").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // PEARL DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/pearl",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#pearl").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // PROMENADE PARK TOWERS DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/ppt",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#ppt").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // REUNION DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/reunion",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#reunion").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // RIVER AND FIFTHE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/rf",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#riverandfifth").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // RIVERVIEW DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/rv",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#riverview").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // SKYTOWER DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/st",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#skytower").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // STANLEY DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/stanley",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#stanley").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // SUGAR WHARF DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sugarwharfw",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#sugarwharf").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // TANU DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/tanu",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#tanu").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // BOND ON YONGE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/bondonyonge",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#bondonyonge").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // BRANCH DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/thebranch",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#branch").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // THE FOREST HILL DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/tfh",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#theforesthill").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // MACKENZIE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/themackenzie",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#mackenzie").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // THE PEAK DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/thepeak",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#peak").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // THE POINT DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/thepoint",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#point").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // THE SAINT DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/thesaint",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#thesaint").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // THORNHILL DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/thornhill",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#thornhill").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // THE UNITED BLDG DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/unitedbldg",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#unitedbldg").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // UPPER SKY DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/uppersky",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#uppersky").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // WATERS EDGE DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/wsedge",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#watersedge").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // Y&S DATATABLE
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/ys",
    dataType: "json",
    success: function(product_details) {
      var resultObj;
      var resultDatatable = '{"result":[';
      for (var i = 0; i < product_details.result.length; i++) {
        if (i != product_details.result.length - 1) {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}" +
            ",";
        } else {
          resultDatatable +=
            "{" +
            '"' +
            "Suite" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Suite +
            '"' +
            "," +
            '"' +
            "Model" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Model +
            '"' +
            "," +
            '"' +
            "Bedroom" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Type +
            '"' +
            "," +
            '"' +
            "Size" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Size +
            '"' +
            "," +
            '"' +
            "Exposure" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Exposure +
            '"' +
            "," +
            '"' +
            "Bathrooms" +
            '"' +
            ":" +
            '"' +
            product_details.result[i].Bathrooms +
            '"' +
            "," +
            '"' +
            "Price" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].Price +
            '"' +
            "," +
            '"' +
            "PSF" +
            '"' +
            ":" +
            '"' +
            "$ " +
            product_details.result[i].PSF +
            '"' +
            "}";
        }
      }
      resultDatatable += "]}";
      resultObj = JSON.parse(resultDatatable);
      temp = resultObj.result;
      var lang = {
        sProcessing: "Loading data from MySQL...",
        sEmptyTable: "Table is empty, check database",
        sInfoThousands: ","
      };
      $("#ys").DataTable({
        language: lang,
        lengthMenu: [25, 45],
        bJQueryUI: true,
        data: temp,
        dataSrc: "",
        columns: [
          { data: "Suite" },
          { data: "Model" },
          { data: "Bedroom" },
          { data: "Size" },
          { data: "Exposure" },
          { data: "Bathrooms" },
          { data: "Price" },
          { data: "PSF" }
        ]
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  // GET DATA FROM MYSQL FOR EVERY CONDO AND CLEAN DATA WHEN CLICK DIFFERENT TAB
  $(".getDesc").click(function() {
    $("#table_products").empty();
  });
});
