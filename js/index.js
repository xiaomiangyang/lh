/**
 * Created by Administrator on 2017/12/19.
 */

//11、wow课件.js初始化
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    new WOW().init();
}

$(function(){
    $('#dowebok').fullpage({
//            循环滚屏
        continuousVertical: true,
        //字体不随着窗口改变而改变
        resize:false,
//            入场动画
        afterLoad: function(anchorLink, index){
            if(index == 1){
                $('.header').css('background-color','rgba(0,0,0,0)')
            }else{
                $('.header').css('background-color','rgba(0,0,0,0.4)')
            }
            if(index == 2){
                //$('.about p').addClass('about-text');
                $('.about .nav').removeClass('bounceOutRight animated').addClass('bounceInRight animated nDelay');
                $('.about .tab-content').removeClass('bounceOutRight animated').addClass('bounceInRight animated tDelay');
            }
            if(index == 3){
                //$('.service').find('p').delay(500).animate({
                //    bottom: '0'
                //}, 1500, 'easeOutExpo');
                $('.service h2').addClass('wow rubberBand animated');
                $('.service .col-md-3').addClass('wow bounceIn animated');
            }
            if(index == 4){
                //$('.case').find('p').fadeIn(2000);
                $('.case h2').addClass('wow rubberBand animated');
                $('.case .row1 .col-md-3').addClass('wow bounceInDown animated');
                $('.case .row2 .col-md-3').addClass('wow bounceInUp animated');
            }
            if(index == 5){
                $('.customer h2').addClass('wow rubberBand animated');
                $('.customer .col-md-3').addClass('wow flipInY animated');
            }
            if(index == 6){
                $('.contact .title').addClass('wow rubberBand animated');
                $('.contact .col-xs-12').addClass('wow flipInX animated');
                $('.contact .col-xs-6').addClass('wow flipInX animated');
            }
        },
//            出场动画
        onLeave: function(index, direction){
            if(index == 1){
                $('.header').css('background-color','rgba(0,0,0,0)')
            }else{
                $('.header').css('background-color','rgba(0,0,0,0.4)')
            }
            if(index == '2'){
                //$('.about p').removeClass('about-text');
                $('.about .nav').removeClass('bounceInRight animated nDelay').addClass('bounceOutRight animated');
                $('.about .tab-content').removeClass('bounceInRight animated tDelay').addClass('bounceOutRight animated');
            }
            if(index == '3'){
                //$('.service').find('p').delay(500).animate({
                //    bottom: '-120%'
                //}, 1500, 'easeOutExpo');
                $('.service h2').removeClass('wow rubberBand animated');
                $('.service .col-md-3').removeClass('wow bounceIn animated');
            }
            if(index == '4'){
                //$('.case').find('p').fadeOut(2000);
                $('.case h2').removeClass('wow rubberBand animated');
                $('.case .row1 .col-md-3').removeClass('wow bounceInDown animated');
                $('.case .row2 .col-md-3').removeClass('wow bounceInUp animated');
            }
            if(index == '5'){
                $('.customer h2').removeClass('wow rubberBand animated');
                $('.customer .col-md-3').removeClass('wow flipInY animated');
            }
            if(index == '6'){
                $('.contact .title').removeClass('rubberBand animated');
                $('.contact .col-xs-12').removeClass('flipInX animated');
                $('.contact .col-xs-6').addClass('wow flipInX animated');
            }
        },
//            绑定菜单
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#menu'
//
//            自动轮播
    });
    //             提示工具初始化
    $('[data-toggle="tooltip"]').tooltip()
});

