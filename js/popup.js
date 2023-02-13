// 팝업 창 닫기
document.querySelector("#popup button").addEventListener("click", function(){
    document.querySelector("#popup").style.display="none";
});
document.querySelector("#popup_api button").addEventListener("click", function(){
    document.querySelector("#popup_api").style.display="none";
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
let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/", /*URL*/
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

// 쿠키 생성
const myPop = document.querySelector("#popup"),
    checkBox = document.querySelector("#close_today"),
    close = document.querySelector(".close");
let visited = false; // 방문여부 체크변수

function setCookie(name, Value, day){
    let date = new Date();//날짜초기화
    let setCookie = '';
    
    date.setDate(date.getDate()+day); //정보를 파기할 날짜지정 7일동안 유지
    setCookie += name+"="+Value+";";
    setCookie += 'Expires='+date.toUTCString(); //쿠키만기일지정  toUTCString 으로 변환
    document.cookie = setCookie; //쿠키 설정, 생성
}

// 쿠키 삭제
// document.cookie = "Name=Value; Expires = 값"
function delCookie(name) {
    let date = new Date();
    let setCookie = '';

    date.setDate(date.getDate()-1); //만기일을 오늘 이전으로 지정하여 삭제
    setCookie += name+"=popup01;";
    setCookie += 'Expires='+date.toUTCString();
    document.cookie = setCookie;
}

// 체크
function checkCookie(name){
    let cookies = document.cookie.split(";");

    // 브라우저에 저장된 여러개의 쿠키중에서 name 변수와 일치하는 값을 검색
    for(let i in cookies){
        if(cookies[i].indexOf(name) > -1){
            // 방문 했던 사람
            visited = true;
        }
    }
    if(visited){
        myPop.style.display = "none";
    }else{
        myPop.style.display = "block";
    }
    console.log(cookies, visited);
}
checkCookie("glifeWeb");
close.addEventListener("click", function(){

    if(checkBox.checked){
        // 오늘 하루 안보기
        setCookie("glifeWeb", "popup01", 1); // setCookie(쿠키명, 쿠키값, 파기일)
        myPop.style.display = "none";
    }else{
        myPop.style.display = "none";
        delCookie("glifeWeb");
    }
})