let Top = document.querySelector("#TopBtn");

window.addEventListener("scroll", function () {
  if (this.scrollY > 200) {
    Top.classList.add("on");
  } else {
    Top.classList.remove("on");
  }
});
Top.addEventListener("click", function () {
  window.scrollTo({ top: "0", behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  let windowScrollY = parseInt(this.scrollY);
  let section = document.querySelectorAll("section");
  let upImg = document.querySelector("#pick .li");
  let upImg2 = document.querySelector("#location .li");
  
  if (windowScrollY > section[1].offsetTop - 600 && windowScrollY < section[2].offsetTop + 600) {
    upImg.classList.add("up");
  } else {
    upImg.classList.remove("up");
  }

  if (windowScrollY > section[2].offsetTop - 900 && windowScrollY < section[3].offsetTop - 200) {
    upImg2.classList.add("up");
  } else {
    upImg2.classList.remove("up");
  }
  console.log(windowScrollY > section[2].offsetTop -300 && windowScrollY < section[3].offsetTop -200);
});
