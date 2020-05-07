$(document).ready(function() {
  $("#resetbutton").click(function() {
    var flag = true;
    var username = $("#reset-username").val();
    var password = $("#password").val();
    var password1 = $("#password1").val();
    console.log(password, password1);
    var pattern = new RegExp(
      "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]"
    );
    var result = username.match(pattern);
    if (!username || !password) {
      alert("you forget to complete the form.");
      $("#username").focus();
      return (flag = false);
    } else if (result) {
      alert("your username can not contain any special character.");
      $("#username").val("");
      return (flag = false);
    }
    if (password.length <= 12 && password.length >= 6) {
      if (password != password1) {
        alert("the password you enter does not match");
        $("#password1").val("");
        $("#password").val("");
        console.log(username);
        return (flag = false);
      }
    } else {
      alert("Your password must between 6 to 12 length");
      $("#password").val("");
      $("#password1").val("");
      return flag == false;
    }

    var data = {
      usr: username,
      pwd: password
    };
    console.log(data);
    event.preventDefault();
    if (flag == true) {
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/reset",
        dataType: "json",
        crossDomin: true,
        data: JSON.stringify(data),
        success: function(result) {
          if (result) {
            if (result.message == "true") {
              alert("password reset successfully");
              window.location.href = "Agent_login.html";
            }
          }
        },
        error: function() {
          console.log(JSON.stringify(data));
          console.log("登录页面出现问题");
        }
      });
    }
  });
});
