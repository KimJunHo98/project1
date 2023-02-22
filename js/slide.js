// 슬라이드 메인 비주얼
$(function(){
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
})  

// sns slide_box
$(function(){
    $(".sns_slide_vid").slick({
        slide: ".slide_box",        
        infinite : true,       
        slidesToShow : 3,        
        slidesToScroll : 1, 
        autoplay : true,            
        autoplaySpeed : 3000,     
        arrows: false,   
        pauseOnHover : true, 
        vertical : false,  
        draggable : true,  
        responsive: [
            {  
                breakpoint: 1400, //화면 사이즈 1400px
                settings: {
                    slidesToShow: 3
                } 
            },
            { 
                breakpoint: 1280, //화면 사이즈 1280px
                settings: {    
                    slidesToShow: 3
                } 
            },
            {  
                breakpoint: 1200, //화면 사이즈 1200px
                settings: {
                    slidesToShow: 3
                } 
            },
            {  
                breakpoint: 1080, //화면 사이즈 1080px
                settings: {
                    slidesToShow: 3
                } 
            },
            {  
                breakpoint: 1024, //화면 사이즈 1024px
                settings: {
                    slidesToShow: 3
                } 
            },
            {  
                breakpoint: 1023, //화면 사이즈 1023px
                settings: {
                    slidesToShow: 3
                } 
            },
            {  
                breakpoint: 1000, //화면 사이즈 1000px
                settings: {
                    slidesToShow: 3
                } 
            },
            {  
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    slidesToShow: 3
                } 
            },
            {  
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    slidesToShow: 3
                } 
            },
            {  
                breakpoint: 690, //화면 사이즈 690px
                settings: {
                    slidesToShow: 2
                } 
            },
            {  
                breakpoint: 486, //화면 사이즈 486px
                settings: {
                    slidesToShow: 2
                } 
            }
        ]
    });
})



