document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#popup button").addEventListener("click", function(){
        document.querySelector("#popup").style.display="none";
    });
    document.querySelector("#popup_api button").addEventListener("click", function(){
        document.querySelector("#popup_api").style.display="none";
    });
});

// 날씨 api
// 오늘 날짜 생성
let date = new Date();
// YYYYMMDD
let year = String(date.getFullYear()),
    month = String(date.getMonth()+1).padStart(2, "0"),
    day = String(date.getDate()).padStart(2, "0"),
    now = year+month+day;

const castBox = document.querySelector("#popup_api");
let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/', /*URL*/
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
    rainIcon = ["<i class='xi-brightness'></i>", "<i class='xi-cloud'></i>", "<i class='xi-umbrella'></i>", "<i class='xi-snow-crystal'></i>"],
    statusText, 
    locText;

url = `${url}${params.type[0]}?serviceKey=${params.Key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`
console.log(url);

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

            console.log(point);
            if(point[0] == 62 && point[1] == 120){
                locText = "용인시 기흥구";
            }
        },
    };
    cast.rainInfo();
    cast.loc();

    castEl.innerHTML = `
        <span>오늘날짜: ${cast.baseDate}</span>
        <span>지역: ${locText}</span>
        <span>날씨: ${statusText} ${rainIcon}</span>
        <span>기온: ${cast.temperature}˚c</span>
        <span>바람: ${cast.wind}/ms</span>
    `;

    castBox.appendChild(castEl);
}
setPosts();
