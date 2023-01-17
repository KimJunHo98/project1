// 화면 스크롤 할 때
$(window).scroll(function(){
    // 스크롤 했을 때의 화면의 스크롤탑 값 + 화면의 높이값/2
    let scrollTop = $(window).scrollTop() + $(window).height()/2; 

    // 스크롤 할 때 섹션에 애니메이션 효과
    $(".content_item").each(function(){
        if(scrollTop > $(this).offset().top-2){
            $(this).addClass("show");
        }else{
            $(this).removeClass("show");
        }
    });
});

// side_dot 버튼 클릭해서 이동하기
$(".side_dot ul li").click(function(e){
    e.preventDefault();      

    let target = $(this),     
        index = target.index(), //인덱스를 부여하여 저장
        section = $(".dot_item").eq(index),
        offset = section.offset().top;  

    $("html, body").animate({scrollTop: offset}, 500, "easeInQuint");
});

// side_dot 내비게이션
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    
    $(".dot_item").each(function(i){
        if(scrollTop >= $(".dot_item").eq(i).offset().top-2){
            $(".side_dot ul li").eq(i).addClass("active").siblings().removeClass("active");
        }
    });
});

$(function(){
    // nav에 마우스 오버할 때
    let nav = $(".nav"),
        subMenu = $(".sub_menu"),
        subBg = $(".sub_menu_bg");

    nav.on("mouseover", function(){
        $(subBg).addClass("show");
    });
    nav.on("mouseleave", function(){
        $(subBg).removeClass("show");
    });
    
    // 서브메뉴
    nav.on("mouseover", function(){
        $(subMenu).addClass("show");
    });
    nav.on("mouseleave", function(){
        $(subMenu).removeClass("show");
    });

    // pc 검색 버튼 
    $(".utill_menu .utill_search a").on("click", function(e){
        e.preventDefault();
        
        $(".pc_srch").slideToggle(200);

        // pc 검색 닫기 버튼
        $(".pc_srch .close_btn").on("click", function(e){
            e.preventDefault();

            $(".pc_srch").slideUp(200);
        });
    });

    // 슬라이드 메인 비주얼
    const visual = $(".main_visual").find(".main_visual_box");
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

            // prev 버튼
            if(currentIndex == 0){
                $(".main_visual_btn .prev").addClass("on");
            }else{
                $(".main_visual_btn .prev").removeClass("on");
            }
            // next 버튼
            if(currentIndex > 0){
                $(".main_visual_btn .next").addClass("on");
            }else{
                $(".main_visual_btn .next").removeClass("on");
            }
        }, 5000);
    };

    // 슬라이드 버튼
    btn.click(function(){
        let tg = $(this).index();
        fade(tg);
    });
    
    function fade(tg){
        if(currentIndex == tg) return;

        visual.eq(currentIndex).fadeOut();
        visual.eq(tg).fadeIn();
        currentIndex = tg;

        // prev 버튼
        if(currentIndex == 0){
            $(".main_visual_btn .prev").addClass("on");
        }else{
            $(".main_visual_btn .prev").removeClass("on");
        }
        // next 버튼
        if(currentIndex > 0){
            $(".main_visual_btn .next").addClass("on");
        }else{
            $(".main_visual_btn .next").removeClass("on");
        }
    };

    // space img tab메뉴
    let spBtn = $(".space_list_btn li a");

    spBtn.eq(0).addClass("active"); // 초기 active 값

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

    // 모바일 서브메뉴
    $(".mo_menu .mo_nav .mo_gnb > li > a").click(function(e){
        e.preventDefault();
    });

    // 패밀리 사이트
    let fBtn = $(".family_link > a"),
        fSite = $(".family_link_list");

    fBtn.click(function(e){
        e.preventDefault();

        fSite.toggleClass("show");
    });
});


