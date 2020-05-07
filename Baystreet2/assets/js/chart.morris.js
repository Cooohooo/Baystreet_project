$(function() {
  /* Morris Area Chart */
  var data = [];
  var dataD = [];
  // var dataL = [];
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/chartdata",
    dataType: "json",
    success: function(result) {
      var obj = new Object();
      for (var i = 0; i < result.result.length; i++) {
        var obj = new Object();
        obj.y = result.result[i].Project_Name;
        obj.a = parseInt(result.result[i].Avg_PSF);
        data.push(obj);
      }
      window.mA = Morris.Bar({
        element: "morrisArea",
        data: data,
        xkey: "y",
        ykeys: ["a"],
        labels: ["AVG-PSF"],
        barColors: ["#2f66a8", "#bbb"],
        lineWidth: 0,
        fillOpacity: 0.5,
        gridTextSize: 10,
        hideHover: "auto",
        resize: true,
        redraw: true
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });
  $.ajax({
    type: "GET",
    url: "http://127.0.0.1:8000/donutchart",
    dataType: "json",
    success: function(result) {
      var obj = new Object();
      for (var i = 0; i < result.result.length; i++) {
        var obj = new Object();
        obj.label = result.result[i].area_name;
        obj.value = parseInt(result.result[i].area_number);
        dataD.push(obj);
      }
      window.mA = Morris.Donut({
        element: "donutArea",
        data: dataD,
        colors: [
          "#3c8dbc",
          "#f56954",
          "#00a65a",
          "#C70039",
          "#FFC300",
          "#0F4159",
          "#7A1D89",
          "#CA2053",
          "#B2B210",
          "#E35D0B",
          "#5815B9"
        ],
        hideHover: "auto",
        formatter: function(y, data) {
          return y + " on the list.";
        },
        resize: true,
        redraw: true
      });
    },
    error: function() {
      console.log("没有从服务器传回正确的数据");
    }
  });

  // BAR CHART OF DIFFERENT AREAS
  // // DEFAULT BARCHART
  // $("#areas").select2({
  //   width: "15rem",
  //   placeholder: "choose the region",
  //   allowClear: false
  // });
  // var linechartdefault = $("#areas").val();
  // var defaultname = {
  //   name: linechartdefault
  // };
  // $.ajax({
  //   type: "POST",
  //   url: "http://127.0.0.1:8000/barchart",
  //   crossDomin: true,
  //   data: JSON.stringify(defaultname),
  //   dataType: "json",
  //   success: function(result) {
  //     var obj = new Object();
  //     for (var i = 0; i < result.result.length; i++) {
  //       var obj = new Object();
  //       obj.y = result.result[i].project_name;
  //       obj.a = parseInt(result.result[i].Avg_PSF);
  //       dataL.push(obj);
  //     }
  //     window.mA = Morris.Bar({
  //       element: "barArea",
  //       data: dataL,
  //       xkey: "y",
  //       ykeys: ["a"],
  //       labels: ["AVG-PSF"],
  //       barColors: ["#2f66a8", "#bbb"],
  //       lineWidth: 0,
  //       fillOpacity: 0.5,
  //       gridTextSize: 10,
  //       hideHover: "auto",
  //       stacked: false,
  //       resize: true,
  //       redraw: true
  //     });
  //     dataL = [];
  //   },
  //   error: function() {
  //     console.log("没有从服务器传回正确的数据");
  //   }
  // });

  // // AREA BARCHART WHEN OPTION SELECTED
  // $("#areas").on("select2:select", function() {
  //   console.log("click the option", $(this).val());
  //   $("#barArea").empty();
  //   var areaname = $(this).val();
  //   var data = {
  //     name: areaname
  //   };

  //   $.ajax({
  //     type: "POST",
  //     url: "http://127.0.0.1:8000/barchart",
  //     crossDomin: true,
  //     data: data,
  //     dataType: "json",
  //     success: function(result) {
  //       var obj = new Object();
  //       for (var i = 0; i < result.result.length; i++) {
  //         var obj = new Object();
  //         obj.y = result.result[i].project_name;
  //         obj.a = parseInt(result.result[i].Avg_PSF);
  //         dataL.push(obj);
  //       }
  //       window.mA = Morris.Bar({
  //         element: "barArea",
  //         data: dataL,
  //         xkey: "y",
  //         ykeys: ["a"],
  //         labels: ["AVG-PSF"],
  //         barColors: ["#2f66a8", "#bbb"],
  //         lineWidth: 0,
  //         fillOpacity: 0.5,
  //         gridTextSize: 10,
  //         hideHover: "auto",
  //         stacked: false,
  //         resize: true,
  //         redraw: true
  //       });
  //       dataL = [];
  //     },
  //     error: function() {
  //       console.log("没有从服务器传回正确的数据");
  //     }
  //   });
  // });
});

/* Morris Line Chart */

//   window.mL = Morris.Line({
//     element: "morrisLine",
//     data: [
//       { y: "2015", a: 100, b: 30, c: 50 },
//       { y: "2016", a: 20, b: 60, c: 100 },
//       { y: "2017", a: 90, b: 120, c: 50 },
//       { y: "2018", a: 50, b: 80, c: 100 },
//       { y: "2019", a: 120, b: 150, c: 50 }
//     ],
//     xkey: "y",
//     ykeys: ["a", "b", "c"],
//     labels: ["Products", "Sales", "Customers"],
//     lineColors: ["#f90a48", "#2962ff", "#ccc"],
//     lineWidth: 1,
//     gridTextSize: 10,
//     hideHover: "auto",
//     resize: true,
//     redraw: true
//   });
//   $(window).on("resize", function() {
//     mA.redraw();
//     mL.redraw();
//   });
// });
