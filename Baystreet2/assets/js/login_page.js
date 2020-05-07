// $(document).ready(function() {
//   // CHECK IF USER IS EXISTED
//   $("#username").blur(function() {
//     var username = $("#username").val();
//     var data = {
//       usr: username
//     };
//     $.ajax({
//       type: "POST",
//       url: "http://127.0.0.1:8000/checkusername",
//       dataType: "json",
//       crossDomin: true,
//       data: JSON.stringify(data),
//       success: function(result) {
//         if (result.exist == "true") {
//           alert("user existed.");
//           $("#username").val("");
//         }
//         console.log(username);
//       },
//       error: function() {
//         console.log("检查用户出现问题");
//       }
//     });
//   });
//   // LOGIN FUNCTION
//   $("#loginbutton").click(function() {
//     var username = $("#login-email").val();
//     var password = $("#password").val();
//     if (!username) {
//       alert("you forget to type username");
//       $("#login-email").focus();
//       return;
//     }
//     if (!password) {
//       alert("you forget to type password");
//       $("#password").focus();
//       return;
//     }
//     var data = {
//       usr: username,
//       pwd: password
//     };
//     // $.cookie("name_of_usr", username, {expires : 2});
//     event.preventDefault();
//     $.ajax({
//       type: "POST",
//       url: "http://127.0.0.1:8000/login",
//       dataType: "json",
//       crossDomin: true,
//       withCredentials: true,
//       data: JSON.stringify(data),
//       success: function(result) {
//         if (result) {
//           if (result.message == "false") {
//             alert("wrong username or password");
//             $("#login-email").val("aaa");
//             $("#password").val("111");
//             window.location.href = "Agent_login.html";
//           } else {
//             alert("Login successfully.");
//             window.location.href = "index.html";
//             $("#login-email").val("bbb");
//             $("#password").val("222");
//           }
//         }
//       },
//       error: function() {
//         console.log("登录页面出现问题");
//       }
//     });
//   });
//   // SIGNUP FUNCTION
//   $("#signupbutton").click(function() {
//     var flag = true;
//     var username = $("#username").val();
//     var password = $("#password").val();
//     var password1 = $("#password1").val();
//     var email = $("#email").val();
//     var phonenumber = $("#phonenumber").val();
//     var companyname = $("#companyname").val();
//     var agentdata = $("input:radio:checked").val();
//     console.log(
//       password,
//       password1,
//       email,
//       phonenumber,
//       companyname,
//       agentdata
//     );
//     var pattern = new RegExp(
//       "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]"
//     );
//     var result = username.match(pattern);
//     if (!username || !password || !email || !phonenumber || !companyname) {
//       alert("you forget to complete the form.");
//       $("#username").focus();
//       return (flag = false);
//     } else if (result) {
//       alert("your username can not contain any special character.");
//       $("#username").val("");
//       return (flag = false);
//     }
//     if (
//       !$("input[name='email']")
//         .val()
//         .match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
//     ) {
//       alert("Wrong format of email");
//       $("#email").val("");
//       return (flag = false);
//     } else {
//       alert("right format");
//     }
//     if (password.length <= 12 && password.length >= 6) {
//       if (password != password1) {
//         alert("the password you enter does not match");
//         $("#password1").val("");
//         $("#password").val("");
//         console.log(username);
//         return (flag = false);
//       }
//     } else {
//       alert("Your password must between 6 to 12 length");
//       $("#password").val("");
//       $("#password1").val("");
//       return flag == false;
//     }

//     var data = {
//       usr: username,
//       pwd: password,
//       ema: email,
//       phn: phonenumber,
//       cpn: companyname,
//       agt: agentdata
//     };
//     console.log(data);
//     event.preventDefault();
//     if (flag == true) {
//       $.ajax({
//         type: "POST",
//         url: "http://127.0.0.1:8000/signup",
//         dataType: "json",
//         crossDomin: true,
//         data: JSON.stringify(data),
//         success: function(result) {
//           if (result) {
//             if (result.message == "true") {
//               alert("signup successfully");
//               window.location.href = "Agent_login.html";
//             }
//           }
//         },
//         error: function() {
//           console.log(JSON.stringify(data));
//           console.log("登录页面出现问题");
//         }
//       });
//     }
//   });
// });
