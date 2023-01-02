$(function(){

const visual = $("#brandVisual>ul>li");
const button = $("#buttonList>li");
let num=$(".slider_wrap #slider_num")
let current = 0;
let id;

/* for(i=0;i<visual.length;i++){
  console.log(i);
} */

let btnIdx = 0; 
const speed = 6000;

//버튼클릭함수
button.click(function () {
  btnIdx = $(this).index();

  button.removeClass("on");
  $(this).addClass("on");
  move();
});

//시간마다 실행할 함수
timer();
function timer() {
  id = setInterval(function () {
    let next = current + 1;
    if (next == visual.length) {
      next = 0;
    }
    button.eq(next).trigger("click");
  }, speed);
}

//슬라이드 이동시키는 함수
function move() {
  if (current == btnIdx) {
    return;
  }
  let cu = visual.eq(current);
  let ne = visual.eq(btnIdx);
  cu.css("left", "0").stop().animate({ left: "-100%" });
  ne.css("left", "100%").stop().animate({ left: "0%" });

  current = btnIdx;
}

/* 자동재생 멈춤 */
clearAuto();
function clearAuto() {
  $("#brandVisual,#buttonList, .controls").mouseenter(function () {
    clearInterval(id);
  });
  $("#brandVisual ,#buttonList, .controls").mouseleave(function () {
    timer();
  });
}

/* 좌우 컨트롤 버튼 */
controls();
function controls(){
  $('.controls .next').click(function(){
    btnIdx =btnIdx+1;

    if(btnIdx == visual.length){
      btnIdx=0;
    }
    button.removeClass("on");
    button.eq(btnIdx).addClass('on');

    let cu = visual.eq(current);
    let ne = visual.eq(btnIdx);
    cu.css("left","0").stop().animate({left:"-100%"})
    ne.css("left","100%").stop().animate({left:"0%"})
    current=btnIdx;
  })

  $('.controls .prev').click(function(){
    btnIdx =btnIdx-1;

    if(current == 0){
      btnIdx=visual.length-1;
    }
    button.removeClass("on");
    button.eq(btnIdx).addClass('on');

    let cu = visual.eq(current);
    let pr = visual.eq(btnIdx);
    cu.css("left","0").stop().animate({left:"100%"})
    pr.css("left","-100%").stop().animate({left:"0%"})
    current=btnIdx;
  })

}


var tabWrapper = $(".tab-wrapper");

tabWrapper.each(function () {
  var currentElement = $(this);
  var menus = currentElement.find(".pick_btn a");
  var panels = currentElement.find(".tab-content > ul");

  menus.eq(0).addClass("active");
  panels.eq(0).show();

  menus.click(function (e) {
    e.preventDefault();

    let tg = $(this);
    let currentLink = tg.attr("href");
    console.log(currentLink);

    panels.hide();
    $(currentLink).show();

    menus.removeClass("active");
    tg.addClass("active");
  });
});




})