$(document).ready(function() {
  // RETURN SUM OF CONDOS IN DIFFERENT AREAS
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofcondos",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      $("#sumofcondos").append(sumofcondos);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofmarkham",
    dataType: "json",
    success: function(result) {
      var sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;
      $("#markham").append(sumofcondos);
      $("#ratiomarkham").append(ratio);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofdowntown",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#downtown").append(sumofcondos);
      $("#ratiodowntown").append(ratio);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofnorthyork",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#northyork").append(sumofcondos);
      $("#rationorthyork").append(ratio);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofmidtown",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#ratiomidtown").append(ratio);
      $("#midtown").append(sumofcondos);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofetobicoke",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#ratioetobicoke").append(ratio);
      $("#etobicoke").append(sumofcondos);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofvaughan",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#ratiovaughan").append(ratio);
      $("#vaughan").append(sumofcondos);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofoakville",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#ratiooakville").append(ratio);
      $("#oakville").append(sumofcondos);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofscarborough",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#ratioscarborough").append(ratio);
      $("#scarborough").append(sumofcondos);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofmississauga",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#ratiomississauga").append(ratio);
      $("#mississauga").append(sumofcondos);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofthornhill",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#ratiothornhill").append(ratio);
      $("#thornhill").append(sumofcondos);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/sumofrichmondhill",
    dataType: "json",
    success: function(result) {
      sumofcondos = "";
      sumofcondos += result[0].SUM;
      var ratio = "$" + result[0].PSF;

      $("#richmondhill").append(sumofcondos);
      $("#ratiorich").append(ratio);
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });

  
  // ISOTOPE INITIALIZE
  // RETURN THE TOTAL PRODUCTS AND FILTER ALL ITEMS
  // $.ajax({
  //   type: "GET",
  //   url: "http://127.0.0.1:8000/products",
  //   dataType: "json",
  //   success: function(products) {
  //     if(products.loginrequired == 'true'){
  //       alert("Need Login to show whole page.");
  //       // window.location.href = "Agent_login.html";
  //     }
  //     else{
  //       var condoList = "";
  //       $.each(products.result, function(i, n) {
  //         redirect = n["Project_Name"] + ".html";
  //         var str = n["Region"].replace(/\s/gi, "");
  //         if (str == "Downtown") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item Downtown"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "Markham") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item Markham"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "NorthYork") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item NorthYork"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "RichmondHill") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item RichmondHill"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "Midtown") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item Midtown"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "Mississauga") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item Mississauga"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "Scarborough") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item Scarborough"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "Vaughan") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item Vaughan"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "Etobicoke") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item Etobicoke"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "Oakville") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item Oakville"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //         if (str == "Thornhill") {
  //           condoList +=
  //             '<div class="col-xl-3 col-sm-6 col-12 element-item Thornhill"><div class="product"><div class="pro-desc"><h5><a href="' +
  //             redirect +
  //             '"' +
  //             ">" +
  //             n["Project_Name"] +
  //             "</a></h5>" +
  //             '<div class="price">' +
  //             "Average PSF: " +
  //             " " +
  //             '<span style="color:rgba(255, 51, 0,0.8); font-weight:bold">' +
  //             n["Avg_PSF"] +
  //             "</span>" +
  //             "</div>" +
  //             "</div></div></div>";
  //         }
  //       });
  //       $(".info").append(condoList);
  //       /* Filter - Isotope */
  //       var $grid = $(".info").isotope({
  //         // options
  //         itemSelector: ".element-item",
  //         layoutMode: "fitRows"
  //       });
  //       // filter items on button click
  //       $(".filters-button-group").on("click", "a", function() {
  //         var filterValue = $(this).attr("data-filter");
  //         $grid.isotope({ filter: filterValue });
  //       });
  //       // change is-checked class on buttons
  //       $(".button-group").each(function(i, buttonGroup) {
  //         var $buttonGroup = $(buttonGroup);
  //         $buttonGroup.on("click", "a", function() {
  //           $buttonGroup.find(".is-checked").removeClass("is-checked");
  //           $(this).addClass("is-checked");
  //         });
  //       });
  //     }
  //   },
  //   error: function() {
  //     console.log("没有从服务器传回正确的数据");
  //   }
  // });
  

  // $.ajax({
  //   type: "GET",
  //   url: "http://127.0.0.1:8000/?login_name=cary",
  //   dataType: "json",
  //   success: function(result) {
  //     var resultObj;
  //     var calPrice = "";
  //     var calPSF = "";
  //     var resultDatatable = '{"result":[';
  //     for (var i = 0; i < result.result.length; i++) {
  //       var transMIP = parseInt(result.result[i].Min_price) / 1000;
  //       var transMXP = parseInt(result.result[i].Max_price) / 1000;

  //       if (transMIP > 1000) {
  //         calPrice =
  //           Math.ceil(transMIP) / 1000 +
  //           "M" +
  //           " - " +
  //           Math.ceil(transMXP) / 1000 +
  //           "M";
  //       } else {
  //         if (transMIP >= 999 && transMIP <= 1000) {
  //           calPrice =
  //             Math.ceil(transMIP) / 1000 +
  //             "M" +
  //             " - " +
  //             Math.ceil(transMXP) / 1000 +
  //             "M";
  //         } else {
  //           if (transMXP >= 1000) {
  //             calPrice =
  //               Math.ceil(transMIP) +
  //               "K" +
  //               " - " +
  //               Math.ceil(transMXP) / 1000 +
  //               "M";
  //           } else {
  //             calPrice =
  //               Math.ceil(transMIP) + "K" + " - " + Math.ceil(transMXP) + "K";
  //           }
  //         }
  //       }
  //       calPSF =
  //         "$" +
  //         result.result[i].Min_PSF +
  //         " - " +
  //         "$" +
  //         result.result[i].Max_PSF;
  //       if (i != result.result.length - 1) {
  //         resultDatatable +=
  //           "{" +
  //           '"' +
  //           "Project_Name" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           result.result[i].Project_Name +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Intersection" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           result.result[i].Intersection +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Region" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           result.result[i].Region +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Avg_PSF" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           "$" +
  //           result.result[i].avg_psf +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Cal_price" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           calPrice +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Cal_psf" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           calPSF +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Updates" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           result.result[i].Updates +
  //           '"' +
  //           "}" +
  //           ",";
  //       } else {
  //         resultDatatable +=
  //           "{" +
  //           '"' +
  //           "Project_Name" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           result.result[i].Project_Name +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Intersection" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           result.result[i].Intersection +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Region" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           result.result[i].Region +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Avg_PSF" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           result.result[i].Avg_PSF +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Cal_price" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           calPrice +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Cal_psf" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           calPSF +
  //           '"' +
  //           "," +
  //           '"' +
  //           "Updates" +
  //           '"' +
  //           ":" +
  //           '"' +
  //           result.result[i].Updates +
  //           '"' +
  //           "}";
  //       }
  //     }
  //     resultDatatable += "]}";
  //     resultObj = JSON.parse(resultDatatable);
  //     temp = resultObj.result;
  //     var lang = {
  //       sProcessing: "Loading data from MySQL...",
  //       sEmptyTable: "Table is empty, check database",
  //       sInfoThousands: ","
  //     };
  //     $("#mytable").DataTable({
  //       language: lang,
  //       lengthMenu: [20, 50, 100],
  //       autoWidth: true,
  //       bJQueryUI: true,
  //       data: temp,
  //       dataSrc: "",
  //       columns: [
  //         { data: "Project_Name" },
  //         { data: "Intersection" },
  //         { data: "Region" },
  //         { data: "Avg_PSF" },
  //         { data: "Cal_price" },
  //         { data: "Cal_psf" },
  //         { data: "Updates" }
  //       ]
  //     });
  //   },
  //   error: function() {
  //     console.log("没有从服务器传回正确的数据");
  //   }
  // });
  



  //     // $.each(result.result, function(i, n) {
  //     //   var transMIP = parseInt(n["Min_price"]) / 1000;
  //     //   var transMXP = parseInt(n["Max_price"]) / 1000;

  //     //   if (transMIP > 1000) {
  //     //     calPrice =
  //     //       Math.ceil(transMIP) / 1000 +
  //     //       "M" +
  //     //       " - " +
  //     //       Math.ceil(transMXP) / 1000 +
  //     //       "M";
  //     //   } else {
  //     //     if (transMIP >= 999 && transMIP <= 1000) {
  //     //       calPrice =
  //     //         Math.ceil(transMIP) / 1000 +
  //     //         "M" +
  //     //         " - " +
  //     //         Math.ceil(transMXP) / 1000 +
  //     //         "M";
  //     //     } else {
  //     //       if (transMXP >= 1000) {
  //     //         calPrice =
  //     //           Math.ceil(transMIP) +
  //     //           "K" +
  //     //           " - " +
  //     //           Math.ceil(transMXP) / 1000 +
  //     //           "M";
  //     //       } else {
  //     //         calPrice =
  //     //           Math.ceil(transMIP) + "K" + " - " + Math.ceil(transMXP) + "K";
  //     //       }
  //     //     }
  //     //   }
  //     //   //calPrice = Math.floor(parseInt(n["Min_price"])/1000) +"K" + " - " + Math.ceil(parseInt(n["Max_price"])/1000) + "K";
  //     //   calPSF = "$" + n["Min_PSF"] + " - " + "$" + n["Max_PSF"];
  //     //   resultDatatable += '{' + '"' + "Project_Name" + '"' + ":" + '"' + n["Project_Name"] + '"' + "," + '"' + "Intersection"
  //     //   + '"' + ":" + '"' + n["Intersection"] + '"' + "," + '"' + "Region" + '"' + ":" + '"' + n["Region"] + '"' + ","
  //     //   + '"' + "Avg_PSF" + '"' + ":" + '"' + n["Avg_PSF"] + '"' + "," + '"' + "Cal_price" + '"' + ":" + '"' + calPrice + '"'
  //     //   + "," +  '"' + "Cal_psf" + '"' + ":" + '"' + calPSF + '"' + "," + '"' + "Updates" + '"' + ":" + '"' + n["Updates"] + '"'
  //     //   + "}" + ",";
  //     // });
  //     //resultDatatable += "]}";
  //     //console.log(resultDatatable);
  //   },
  //   error: function() {
  //     console.log("没有从服务器传回正确的数据");
  //   }
  // });
});
// $(".getdata8C").click(function() {
//   alert("已经进入8c");
//   $.ajax({
//     type: "GET",
//     url: "http://127.0.0.1:8000/eightc",
//     dataType: "json",
//     success: function(product_details) {
//       var condoList = "";
//       $.each(product_details.result, function(i, n) {
//         condoList +=
//           "<tr><td>" +
//           n["Suite"] +
//           "</td>" +
//           "<td>" +
//           n["Model"] +
//           "</td>" +
//           "<td>" +
//           n["Type"] +
//           "</td>" +
//           "<td>" +
//           n["Size"] +
//           "</td>" +
//           "<td>" +
//           n["Exposure"] +
//           "</td>" +
//           "<td>" +
//           n["Bathrooms"] +
//           "</td>" +
//           "<td>" +
//           "$" +
//           n["Price"] +
//           "</td>" +
//           "<td>" +
//           "$" +
//           n["PSF"] +
//           "</td></tr>";
//       });
//       $("#table_products").append(condoList);
//     },
//     error: function() {
//       console.log("没有从服务器传回正确的数据");
//     }
//   });
// });
