
//选项卡切换 menu right部分

$(function(){
    //先缓存 tabs
    var $tab = $(".text > dl");

    //默认显示的第一个选项
    $tab.eq(0).show();

    //绑定鼠标移入事件
    $(".r_btn > ul").find("li").each(function(index){
        //为每个li绑定鼠标移入事件
        $(this).on("mouseover",function(){
            //切换标题的焦点
            $(this).children().addClass("ac");
            $(this).siblings().children().removeClass();
            //切换要显示的div
            $tab.eq(index).stop().fadeIn().siblings().hide();  //stop() 立刻停止动画 可以解决鼠标快速在li上移动产生的BUG
            
        });
    });
})