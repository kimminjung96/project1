const myPop = document.querySelector("#layer"),
  checkbox = document.querySelector("#popup"),
  close = document.querySelector(".close");
let visited = false; //방문여부 체크변수

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);

  let setCookie = "";
  setCookie = name + "=" + value + ";";
  setCookie += "Expires=" + date.toUTCString();

  document.cookie = setCookie;
}
function delCookie(name) {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  let setCookie = "";
  setCookie = name + "=popup01;";
  setCookie += "Expires=" + date.toUTCString();
  document.cookie = setCookie;
}

//쿠키체크
function checkCookie(name) {
  let cookies = document.cookie.split(";");
  for (let i in cookies) {
    if (cookies[i].indexOf(name) > -1) {
      visited = true;
    }
  }
  console.log(cookies, visited);
  if (visited) {
    myPop.style.display = "none";
  } else {
    myPop.style.display = "block";
  }
}
checkCookie("Visitor");
close.addEventListener("click", function () {
  if (checkbox.checked) {
    setCookie("Visitor", "popup01", 1);
    myPop.style.display = "none";
  } else {
    myPop.style.display = "none";
    delCookie("Visitor");
  }
});
