const notice = $("#noticeSlider>li");
const next1 = $(".next a");
let stop = $(".stop");
let current1 = 0;
let id1;
let btnIdx1 = 0;
const speed1 = 1000;
console.log("notice", notice);

notice.each(function (i, o) {
  $(o).css({ top: 100 * i + "%" });
});
/*
stop.click(() => {
  if (stop.attr("class") === "stop") {
    stop.removeClass("stop");
    stop.addClass("stop");
    clearInterval(id1);
  } else {
    stop.removeClass("stop");
    stop.addClass("stop");
    timer();
  }
});
*/

//시간마다 실행할 함수
timer();
function timer() {
  id1 = setInterval(function () {
    console.log("dd")
    let next = current1 + 1;  //0+1 (1)
    if (next == notice.length) {
      next = 0;
    }
   // next1.trigger("click");
  }, speed1);
}



//슬라이드 이동시키는 함수
function move() {
  if (current1 == btnIdx1) {
    return;
  }
  let cu = notice.eq(current1);
  let ne = notice.eq(btnIdx1);
  cu.css("top", "0").stop().animate({ top: "-100%" });
  ne.css("top", "100%").stop().animate({ top: "0%" });

  current1 = btnIdx1;
}

/* 자동재생 멈춤 */
//clearAuto();
function clearAuto() {
  $("#noticeSlider,.next1, .prev,.next").mouseenter(function () {
    clearInterval(id1);
  });
  $("#noticeSlider ,.next1, .prev,.next").mouseleave(function () {
    timer();
  });
}

/* 좌우 컨트롤 버튼 */
controls();
function controls() {
  $(".notice_controls .next").click(function () {
    btnIdx1 = btnIdx1 + 1;

    if (btnIdx1 == notice.length) {
      btnIdx1 = 0;
    }
    next1.removeClass("on");
    next1.eq(btnIdx1).addClass("on");

    let cu = notice.eq(current1);
    let ne = notice.eq(btnIdx1);
    cu.css("top", "0").stop().animate({ top: "-100%" });
    ne.css("top", "100%").stop().animate({ top: "0%" });
    current1 = btnIdx1;
  });

  $(".notice_controls .prev").click(function () {
    btnIdx1 = btnIdx1 - 1;

    if (current1 == 0) {
      btnIdx1 = notice.length - 1;
    }
    next1.removeClass("on");
    next1.eq(btnIdx1).addClass("on");

    let cu = notice.eq(current1);
    let pr = notice.eq(btnIdx1);
    cu.css("top", "0").stop().animate({ top: "100%" });
    pr.css("top", "-100%").stop().animate({ top: "0%" });
    current1 = btnIdx1;
  });
}
