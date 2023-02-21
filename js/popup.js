// 팝업 창 닫기
document.querySelector("#popup button").addEventListener("click", function(){
    document.querySelector("#popup").style.display="none";
});

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

// 팝업 이동
$( function() {
    $( "#popup" ).draggable();
} );