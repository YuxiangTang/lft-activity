$(window).scroll(function () {
    var h = $(this).scrollTop();//获得滚动条距top的高度
    if (h > 580) {
        $(".slider").fadeIn();
    }
    else {
        $(".slider").fadeOut();
    }
    n = Math.floor((h - 580) / 910);
    $(".slider ul li").css("background-color", "#fff100");
    $(".slider ul li:eq(" + n + ")").css("background-color", "#fff");
    $(".slider ul li:eq(5)").css("background-color", "transparent");

}


);

$(function () {
    $(".slider ul li").bind('click',function() {
        var index = $(".slider ul li").index(this);
        var wrapH1 = $(".l-links-content").height();
        console.log("wrapH1="+wrapH1);
        if (!(index >= 5)) {
            $("html,body").animate({scrollTop: index * 1000 + 700}, 800);
            $(".slider ul li").css({"background-color": "#fff100"});
            $(".slider ul li:eq(" + index + ")").css("background-color", "#fff");

        }
        else
            $("html,body").animate({scrollTop: 0}, 800);
        $(".slider ul li:eq(5)").css("background-color", "transparent");
    })

});