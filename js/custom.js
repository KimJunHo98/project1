$(function(){
    // nav에 마우스 오버할 때
    let nav = $(".nav"),
        subMenu = $(".sub_menu"),
        subBg = $(".sub_menu_bg");

    nav.on("mouseover", function(){
        $(subBg).stop().slideDown(300);
    });
    nav.on("mouseleave", function(){
        $(subBg).slideUp(300);
    });
    
    // 서브메뉴
    nav.on("mouseover", function(){
        $(subMenu).stop().slideDown(300);
    });
    nav.on("mouseleave", function(){
        $(subMenu).slideUp(300);
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
    const mbMenu = $(".mo_menu .mo_nav .mo_gnb > li > a");

    mbMenu.each(function(i){
        mbMenu.eq(i).click(function(e){
            e.preventDefault();

            let tg = $(this);
            const mbSubMenu = $(".mo_nav .mo_gnb li .sub_menu");

            mbSubMenu.eq(i).slideToggle();
            tg.find("i").toggleClass("rotate");
        })
    })
    
    // 패밀리 사이트
    let fBtn = $(".family_link > a"),
        fSite = $(".family_link_list");

    fBtn.click(function(e){
        e.preventDefault();

        fSite.toggleClass("show");
    });
});