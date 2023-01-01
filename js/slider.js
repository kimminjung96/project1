const visual = $("#sliderImg>ul>li");
const button = $("#buttonList>li");
let current = 0; //현재보고있는 놈
let id; //setIntervalId =>자동

let btnIdx = 0; //클릭한 페이저 버튼의 인덱스
const speed = 3000;

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

// 자동재생 멈춤 
clearAuto();
function clearAuto() {
  $("#brandVisual,#buttonList, .controls").mouseenter(function () {
    clearInterval(id);
  });
  $("#brandVisual ,#buttonList, .controls").mouseleave(function () {
    timer();
  });
}

// 좌우 컨트롤 버튼
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


