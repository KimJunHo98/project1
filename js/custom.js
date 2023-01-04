$(function(){
    // nav에 마우스 오버할 때
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
    const visual = $(".main_visual").find(".main_visual_box");
    console.log(visual);
    const btn = $(".main_visual_btn").find("button");
    const visualCount = visual.length;
    let timer;
    let currentIndex = 0;
    
    visual.eq(currentIndex).fadeIn();
    
    // 자동 슬라이드
    showNextSlide();
    function showNextSlide(){
        timer = setInterval(function(){
            let nextIndex = (currentIndex+1)%visualCount;

            // 현재 슬라이드 사라지고 다음 슬라이드 보여줌
            visual.eq(currentIndex).fadeOut();
            visual.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;

            if(currentIndex==0){
                $(".main_visual_btn .prev").addClass("on");
            }else{
                $(".main_visual_btn .prev").removeClass("on");
            }

            if(currentIndex>0){
                $(".main_visual_btn .next").addClass("on");
            }else{
                $(".main_visual_btn .next").removeClass("on");
            }
        }, 5000);
    };

    // 슬라이드 버튼
    // btn.click(function(){
    //     clearInterval(timer);
    //     let tg = $(this).index();
    //     fade(tg);
    // });
    
    // function fade(tg){
    //     if(currentIndex==tg) return;

    //     visual.eq(currentIndex).fadeOut();
    //     visual.eq(tg).fadeIn();
    //     currentIndex = tg;
    // };

    // space img tab메뉴
    let spBtn = $(".space_list_btn li a");

    spBtn.eq(0).addClass("active");

    spBtn.click(function(e){
        e.preventDefault();
        let tg = $(this); // spBtn
        let currentLink = tg.attr("href"); // spImg
        
        spBtn.removeClass("active");
        tg.addClass("active");
        $(currentLink).show().siblings().hide(); 
    });

    // 모바일 메뉴 버튼 클릭
    $(".m_gnb_btn a").on("click", function(e){
        e.preventDefault();
        
        $(".header .mo_menu").fadeToggle(300);
        // 모바일 메뉴 닫기 버튼
        $(".mo_menu .head .btns a.close").on("click", function(e){
            e.preventDefault();

            $(".header .mo_menu").fadeOut(300);
        });
    });

    // 모바일 gnb
    $(".mo_menu .mo_nav .mo_gnb > li > a").click(function(e){
        e.preventDefault();

        $(".mo_menu .mo_nav .mo_gnb > li .sub_menu").slideToggle(300);
    });
});


