// 오늘 날짜 생성
let date = new Date();
// YYYYMMDD
let year = String(date.getFullYear()),
month = String(date.getMonth()+1).padStart(2, "0"),
day = String(date.getDate()).padStart(2, "0"),
now = year+month+day;

// 날씨 api
const castBox = document.querySelector(".weather_api");
let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/", /*URL*/
    params = {
        type: ["getUltraSrtNcst","getUltraSrtFcst"],
        Key: "0PsKzhgdwTGb31fYbqtimZXYqghQBb%2FfMm3iRnZbAk04jO0IecNoZCtGcF3n%2BHAkmq7dJDSpwQhDp1VknMlItw%3D%3D",
        pageNo: "1", 
        numOfRows: "1000",
        dataType: "JSON",
        base_date: now,
        base_time: "0600",
        nx: "62",
        ny: "120",
    },
    rainIcon = ["<b class='sun'>☀</b>", "<b class='cloud'>☁</b>", "<b class='rain'>🌧</b>", "<b class='snow'>🌨</b>"],
    statusText, 
    locText;

url = `${url}${params.type[0]}?serviceKey=${params.Key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;

// 값 얻기
async function getPosts(){
    const res = await fetch(url),
        data = await res.json();
    
    return data;
}

// 얻은 값 가져오기
async function setPosts(){
    const posts = await getPosts(),
        datas = posts.response.body.items.item,
        // 동적요소 생성
        castEl = document.createElement("p");
    let cast = {
        baseDate: datas[0].baseDate,
        rain: datas[0].obsrValue,
        rainInfo: function(){
            let info = this.rain;
            
            if(info == 0){
                statusText = "맑음";
                rainIcon = rainIcon[0];
            }else if(info == 1){
                statusText = "흐림"
                rainIcon = rainIcon[1];
            }else if(info == 2){
                statusText = "폭우"
                rainIcon = rainIcon[2];
            }else if(info == 3){
                statusText = "눈"
                rainIcon = rainIcon[3];
            }
        },
        temperature: datas[3].obsrValue,
        wind: datas[7].obsrValue,
        nx: datas[0].nx,
        ny: datas[0].ny,
        loc: function(){
            let point = [this.nx, this.ny];

            if(point[0] == 62 && point[1] == 120){
                locText = "기흥구";
            }
        },
    };
    cast.rainInfo();
    cast.loc();

    castEl.innerHTML = `
    <span>${rainIcon}&nbsp;&nbsp; ${cast.temperature}˚c ${statusText}</span><br>
    <span>${cast.wind}/ms</span>
    <span>${locText}</span>
    `;

    castBox.appendChild(castEl);
}
setPosts();