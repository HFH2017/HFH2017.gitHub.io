/**
 * Created by dell on 2017/2/6.
 */
$(function(){
   //1.�����˵�
    $('#nav li').hover(function(){
        $(this).children('.jnNav').show();//���뺢�ӹ��˳�����ʾ
    },function(){                         //����
        $(this).children('.jnNav').hide();
    });

    //2.�ֲ�ͼ
    $('#jnImageroll .tab-menu a').on('mouseover',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        var index = $(this).index();
        $('#JS_imgWrap a').eq(index).fadeIn().siblings().fadeOut();          //eq����ƥ��Ԫ�صļ���Ϊָ������������һ��Ԫ�ء�
    });
    $('.promoted').append('<s class="hot"></s>')

    //Ʒ�ƻ
    $('#jnBrandList li').append('<span style="position: absolute;top: 0;left: 5px;width: 183px;height: 164px" class="imageMask"></span>');

     tooltip('.tooltip');

});