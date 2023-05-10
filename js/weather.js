let date = new Date();
let year = String(date.getFullYear());
let month = String(date.getMonth() + 1).padStart(2, "0");
let day = String(date.getDate()).padStart(2, "0");
let now = year + month + day;

//getUltraSrtNcst 초단기 실황
//getVilageFcst 단기예보
const castBox = document.querySelector("#weather");
let statusText, rainIcon, locText;
rainIcon = [
  '<i class="bi bi-brightness-high-fill"></i>',
  '<i class="bi bi-cloud-drizzle-fill"></i>',
  '<i class="bi bi-cloud-lightning-fill"></i>',
  '<i class="bi bi-cloud-lightning-fill"></i>',
  '<i class="bi bi-snow"></i>',
];

var url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/`; /*URL*/
let parms = {
  type: ["getUltraSrtNcst", "getVilageFcst"],
  key: "7zVski0uGwL3gL5jEpfao0RXQMHwnbAKUt7Lmu9bHtXeIAbHWwCDQkv1Cv9Fw5ND1eEzacjpS4%2B%2FxWBAy70NHg%3D%3D",
  pageNo: "1",
  numOfRows: "1000",
  dataType: "JSON",
  base_date: now,
  base_time: "0600",
  nx: "61",
  ny: "128",
};

url = `${url}${parms.type[0]}?serviceKey=${parms.key}&pageNo=${parms.pageNo}&numOfRows=${parms.numOfRows}&dataType=${parms.dataType}&base_date=${parms.base_date}&base_time=${parms.base_time}&nx=${parms.nx}&ny=${parms.ny}`;

async function getPosts() {
  const res = await fetch(`${url}`);
  const data = await res.json();
  return data;
}

async function setPosts() {
  const posts = await getPosts();
  const datas = posts.response.body.items.item;
  const castEl = document.createElement("table");
  castEl.classList.add("table");
  const tr = document.createElement("tr");

  let cast = {
    baseDate: datas[0].baseDate,
    rain: datas[0].obsrValue,
    rainInfo: function () {
      let info = this.rain;
      if (info == 0) {
        statusText = "맑음";
        rainIcon = rainIcon[0];
      } else {
        if (info == 1) {
          statusText = "비";
          rainIcon = rainIcon[1];
        } else if (info == 7) {
          statusText = "눈";
          rainIcon = rainIcon[4];
        }
      }
    },
    temperature: datas[3].obsrValue,
    wind: datas[7].obsrValue,
    nx: datas[0].nx,
    ny: datas[0].ny,
    loc: function () {
      let point = [this.nx, this.ny];
      if (point[0] == 61 && point[1] == 128) {
        locText = "대전";
      }
    },
  };
  cast.rainInfo();
  cast.loc();
  castBox.innerHTML = `
  <b>오늘의 유성구</b>
   <p>${statusText}${rainIcon}</p>
   <p>기온: ${cast.temperature}도</p>
  `;
}
setPosts();
