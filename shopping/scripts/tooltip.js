/**
 * Created by dell on 2017/2/6.
 */
    //tooltip
function tooltip(selected){
    $(selected).hover(function(e){
        var iLeft = e.pageX;
        var iTop = e.pageY;
        this.myTitle = this.title;
        this.title = "";
        $tooltip = $('<div id="tooltip" style="left: '+(iLeft+15)+'px;top: '+(iTop+15)+'px;">'+this.myTitle+'</div>');
        $tooltip.show(300).appendTo(document.body);
    },function(){
        $('#tooltip').remove();
        this.title = this.myTitle;
    });
    $(selected).on('mousemove',function(e){
        $('#tooltip').offset({
            left: e.pageX+15,
            top: e.pageY + 15
        });
    });
}