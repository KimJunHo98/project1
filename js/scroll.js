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

$(window).scroll(function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
    let header = $('#header');
    let schedule = $("#schedule");
    
    if(scrollTop >= schedule.offset().top){
        $(header).addClass("sticky");
    }else{
        $(header).removeClass("sticky");
    }
})

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
    let scrollTop = $(window).scrollTop();
    
    $(".dot_item").each(function(i){
        if(scrollTop >= $(".dot_item").eq(i).offset().top - 2){
            $(".side_dot ul li").eq(i).addClass("active").siblings().removeClass("active");
        }
    });
});