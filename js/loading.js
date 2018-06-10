/**
 * Created by Administrator on 2017/12/13.
 */

// 添加类名:addClass   删除节点：remove()
$(function(){
    if(window.name==''){
        $('.loading-middle').addClass('middle');
        $('.loading-top').addClass('top');
        $('.loading-bottom').addClass('bottom');
        $('.loading').delay(2000).animate({
            zIndex:-10
        });
        window.name = 0;
    }else{
        //window.name++;
        //alert('您已经刷新页面'+window.name+'次了');
        $('.loading').remove();
    }
});