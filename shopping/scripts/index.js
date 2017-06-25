/**
 * Created by dell on 2017/2/6.
 */
$(function(){
   //1.导航菜单
    $('#nav li').hover(function(){
        $(this).children('.jnNav').show();//滑入孩子过滤出来显示
    },function(){                         //滑出
        $(this).children('.jnNav').hide();
    });

    //2.轮播图
    $('#jnImageroll .tab-menu a').on('mouseover',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        var index = $(this).index();
        $('#JS_imgWrap a').eq(index).fadeIn().siblings().fadeOut();          //eq减少匹配元素的集合为指定的索引的哪一个元素。
    });
    $('.promoted').append('<s class="hot"></s>')

    //品牌活动
    $('#jnBrandList li').append('<span style="position: absolute;top: 0;left: 5px;width: 183px;height: 164px" class="imageMask"></span>');

     tooltip('.tooltip');

});