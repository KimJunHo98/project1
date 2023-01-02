// gnb에 마우스 오버할 때
let nav = document.querySelector(".nav"),
    // subMenu = document.querySelectorAll(".sub_menu"),
    subBg = document.querySelector(".sub_menu_bg");

nav.addEventListener("mouseover", function(){
    subBg.classList.add("show");
});
nav.addEventListener("mouseleave", function(){
    subBg.classList.remove("show");
});

// 슬라이드 배너
let slideWrap = document.getElementsByClassName(".main_visual"),
    slide = document.getElementsByClassName("main_visual_box"),
    slideCnt = slide.length,
    current = 0,
    btnPrev = document.getElementsByClassName("prev"),
    btnnext = document.getElementsByClassName("next");
// javascript

// -------------- jQuery ------------------
// gnb에 마우스 오버할 때
let subMenu = $(".sub_menu");

$(function(){
    $(nav).on("mouseover", function(){
        $(subMenu).addClass("show");
    });
    $(nav).on("mouseleave", function(){
        $(subMenu).removeClass("show");
    });
});

