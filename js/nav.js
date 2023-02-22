const gap = 500;
function nav() {
  const nav = document.querySelector(".header_bot");

  let scrollTop;
  window.addEventListener("scroll", function () {
    scrollTop = window.scrollY;
    scrollTop>= nav.clientHeight ? nav.classList.add("sticky") : nav.classList.remove("sticky");
});
}

nav();
