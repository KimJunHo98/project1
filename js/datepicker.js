$(function(){
    const cal = $(".utill_cal a"),
    overlay = $(".dp_overlay");

    $("#datepicker").datepicker({
        showOtherMonths: true,
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
    
    cal.click(function(e){
        e.stopPropagation();

        $("#datepicker").fadeIn(300);
        overlay.addClass("visible");
    });

    overlay.click(function(){
        $("#datepicker").fadeOut(300);
        $(this).removeClass("visible");
    });
});