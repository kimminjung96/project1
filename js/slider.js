const visual = $("#brandVisual>ul>li");
const button = $("#buttonList>li");
let play = $(".controls li:nth-child(2)");
let num = $(".slider_wrap #slider_num");
let current = 0;
let id;
let check = false;
let btnIdx = 0;
const speed = 4000;


let textArr=["온천","유성","축제"]

//num.text(visual.length)


// play.click(() => {
//   if (play.text() == "stop") {
//     play.text("play");
//     play.removeClass("stop");
//     play.addClass("play"), clearInterval(id);

//   } else {
//     play.text("stop");
//     play.removeClass("play");
//     play.addClass("stop");
//     timer();
//   }
// });

play.click(() => {
  if (play.attr("class") === "stop") {
    play.removeClass("stop");
    play.addClass("play");
    clearInterval(id);
  } else {
    play.removeClass("play");
    play.addClass("stop");
    timer();
  }
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

//버튼클릭함수
button.click(function () {
  btnIdx = $(this).index();

  num.text(current+1+"/"+visual.length)

  button.removeClass("on");
  $(this).addClass("on");
  move();
});

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
  $("#brandVisual,#buttonList, .prev,.next").mouseenter(function () {
    clearInterval(id);
  });
  $("#brandVisual ,#buttonList, .prev,.next").mouseleave(function () {
    timer();
  });
}

/* 좌우 컨트롤 버튼 */
controls();
function controls() {
  $(".controls .next").click(function () {
    btnIdx = btnIdx + 1;

    if (btnIdx == visual.length) {
      btnIdx = 0;
    }
    button.removeClass("on");
    button.eq(btnIdx).addClass("on");

    let cu = visual.eq(current);
    let ne = visual.eq(btnIdx);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.css("left", "100%").stop().animate({ left: "0%" });
    current = btnIdx;
  });

  $(".controls .prev").click(function () {
    btnIdx = btnIdx - 1;

    if (current == 0) {
      btnIdx = visual.length - 1;
    }
    button.removeClass("on");
    button.eq(btnIdx).addClass("on");

    let cu = visual.eq(current);
    let pr = visual.eq(btnIdx);
    cu.css("left", "0").stop().animate({ left: "100%" });
    pr.css("left", "-100%").stop().animate({ left: "0%" });
    current = btnIdx;
  });
}
