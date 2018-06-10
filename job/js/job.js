
//11、wow课件.js初始化
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    new WOW().init();
};
//find后面写的是div

$(function(){
//        滚屏初始化
    $('#page5').fullpage({
//            循环滚屏
        continuousVertical: true,
//        字体不随着窗口改变而改变
        resize:false,

//            入场动画
        afterLoad: function(anchorLink, index){

            //         第五屏时（招聘页面）
            if(index == 5){
                //$('.about').find('p').delay(500).animate({
                // left: '150px'
                // }, 1500, 'easeInOutElistic');
                //$('.about p').addClass('about-text ');
                $('.banner .h1').removeClass ('bounceOutRight animated')
                    .addClass('bounceInRight animated nDelay ');

                $('.banner .lead') .removeClass ('bounceOutRight animated')
                    .addClass('bounceInRight animated tDelay ');
            }


        },






//            离开动画
        onLeave: function(index, direction){

            //         第五屏时（招聘页面）
            if(index == 5){
                //$('.about').find('p').delay(500).animate({
                // left: '150px'
                // }, 1500, 'easeInOutElistic');
                //$('.about p').addClass('about-text ');
                $('.banner .h1').removeClass ('bounceOutRight animated') ;


                $('.banner .lead') .removeClass ('bounceOutRight animated');

            }
        },

//
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu'

    });




//        显示工具的初始化
    $('[  data-toggle="tootip"]').tooltip();

//
//        setInterval(function(){
//            $.fn.fullpage.moveSectionDown();
//        }, 3000);
//

//   //滚屏响应式 小于1024时，显示滚动条  自动滚屏
//        $(window).resize(function(){
//            autoScrolling();
//        });
//        function autoScrolling(){
//            var $ww = $(window).width();
//            if($ww < 1024){
//                $.fn.fullpage.setAutoScrolling(false);
//            } else {
//                $.fn.fullpage.setAutoScrolling(true);
//            }
//        }
//        autoScrolling();
});













//11、wow课件
new WOW({ animateClass: 'animated', offset: 0 }).init();
//toScroll
$('a.toscroll').bind('click', function (e) {
    var $this = $(this), id = $this.attr('href');
    var offset = $(id) && $(id).length ? $(id).offset().top : 0;
    $('html,body').stop().animate({ scrollTop: offset }, 1200, 'easeInOutExpo');
    e.preventDefault();
})
//scrollTop
$(window).scroll(function () {
    ($(this).scrollTop() >= 200) ? $('.scroll-top').fadeIn(300) : $('.scroll-top').fadeOut(300);
});
//百度推送
(function () {
    var s = document.getElementsByTagName("script")[0];
    var bp = document.createElement('script');
    bp.src = '//push.zhanzhang.baidu.com/push.js';
    s.parentNode.insertBefore(bp, s);
})();



//百度统计
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?08f070d846e7c32a036e47f9df0f362a";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();







