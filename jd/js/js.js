$(function () {


    /*tab切换*/
    $(function () {
        $(".tie_list").eq(0).show();
        $(".tab>ul>li").hover(function () {
            $('.tab span').animate({'left':$(this).position().left},200)
            var index=$(this).index();
            /*$(".tie_list").hide().eq(index).show()//先隐藏当前的索引在显示*/
            $(".shou_hide>div").eq($(this).index()).show().css({'transform': 'translateX(300px)'}).siblings().hide().css('transform', 'translateX(-300px, 0)');
        })
    })



})