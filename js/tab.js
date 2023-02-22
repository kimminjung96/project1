var menus = $(".pick_btn a");
var panels = $(".tab-content > ul");

menus.eq(0).addClass("active");
panels.eq(0).show().css("display","flex");

menus.click(function (e) {
  e.preventDefault();

  let tg = $(this);
  let currentLink = tg.attr("href");

  panels.hide();
  $(currentLink).show().css("display","flex");

  menus.removeClass("active");
  tg.addClass("active");
});
