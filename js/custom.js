$(function(){
    // gnb에 마우스 오버할 때
    let nav = $(".nav"),
        subMenu = $(".sub_menu"),
        subBg = $(".sub_menu_bg");

    $(nav).on("mouseover", function(){
        $(subBg).addClass("show");
    });
    $(nav).on("mouseleave", function(){
        $(subBg).removeClass("show");
    });
    
    // 서브메뉴
    $(nav).on("mouseover", function(){
        $(subMenu).addClass("show");
    });
    $(nav).on("mouseleave", function(){
        $(subMenu).removeClass("show");
    });

    // 슬라이드 메인 비주얼
    let slides = $(".main_visual_box"),
        slideCnt = slides.length, // 슬라이드 개수
        btnPrev = $(".main_visual_btn .prev"),
        btnNext = $(".main_visual_btn .next"),
        current = 0;
        
    slides.eq(current).fadeIn();

    // 자동 슬라이드
    setInterval(showNextSlide, 5000); 
    function showNextSlide(){
        let next = (current+1)%slideCnt;
        // 현재 슬라이드 사라지고 다음 슬라이드 보여줌
        slides.eq(current).fadeOut();
        slides.eq(next).fadeIn();
        current = next;
    };
});


