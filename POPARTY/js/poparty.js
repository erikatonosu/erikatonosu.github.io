$(function(){
    console.log('DOMの読み込み');
    $('.pagetop a').on('click', function(evt){
            // console.log('クリックした');
            // console.log(evt);
        evt.preventDefault();  // イベントの停止

        // ページトップまでするする上がっていく動き
        $('html,body').animate({scrollTop:0}, 2000,'easeInOutCubic');
    });
});

$('header li a').on('click', function(evt){
    evt.preventDefault();  // イベントの停止
        // console.log('クリックしたよ');
    // クリックしたものの値を取る
    // クリックイベントで取得した値を変数に保存する

    // リンク先を保存する変数
    var targetName = $(this).attr('href');
        // console.log(targetName);

    // targetNameの座標
    var targetPos = $(targetName).offset().top;
        // console.log(targetPos);

    //targetPosまでのアニメーション
    $('html,body').animate({scrollTop:targetPos}, 1000, 'easeInOutCubic');
});


// スクロールイベント
$(window).scroll(function(){
        // console.log('スクロールしてるよ');
    var posY = $(this).scrollTop();
        // console.log(posY); // posYの座標を取得

    if (posY > 730) {
        $('header').slideDown();
    }else if (posY < 730) {
        $('header').slideUp();
    }

});
