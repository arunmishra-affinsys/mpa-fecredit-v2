//Timer Code

var timer = new easytimer.Timer();
timer.start();
timer.addEventListener("secondsUpdated", (e) => {
  $("#timer").html(timer.getTimeValues().toString());
});

function cookieParser() {
  let all = document.cookie.split("; ");
  return all.reduce(
    (map, val) => ({ ...map, [val.split("=")[0]]: val.split("=")[1] }),
    {}
  );
}

var delete_cookie = function (name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

//conditional render of login/logout and cookie handlers
$(document).ready(() => {
  var logButton = $(".login-logout");
  if (!!cookieParser()["lgid"]) {
    logButton.html("Logout");
    logButton.attr("href", "/");
  } else {
    logButton.html("Login");
  }

  logButton.click(() => {
    if (!!cookieParser()["lgid"]) {
      delete_cookie("lgid");
    }
  });
});
