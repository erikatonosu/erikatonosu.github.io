// DOMロード
$(function(){

    // タッチイベント
    $('#ball').on('touchstart', function(){
        $('#touchresult li').eq(0).text('touchstartしたよ');
    });

    $('#ball').on('touchmove', function(){
        $('#touchresult li').eq(1).text('touchmoveしたよ');
    });

    $('#ball').on('touchend', function(){
        $('#touchresult li').eq(2).text('touchendしたよ');
    });


});
