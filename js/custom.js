// gnb에 마우스 오버할 때
let nav = document.querySelector("nav"),
    subBg = document.querySelector(".sub_menu_bg");

nav.addEventListener("mouseover", function(){
    subBg.classList.add("show");
});
nav.addEventListener("mouseleave", function(){
    subBg.classList.remove("show");
});


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

// 슬라이드 배너
$(function(){
    
});
