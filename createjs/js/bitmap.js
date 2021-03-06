// 先読みするリスト(画像などを先に読ませておく)
var manifest = [
    {src:'img/tomato.png'},
    {src:'img/pumpkin.png'},
    {src:'img/hourensou.png'}
];







// DOMを読み込んだら
$(function(){

    // ステージ(canvas)の設定
    var stage = new createjs.Stage('canvasEl');

    // loadQueue ローディング
    var loadQueue = new createjs.LoadQueue();
    loadQueue.loadManifest(manifest);  // 読み込み開始

    loadQueue.addEventListener('complete',function(){
        console.log('読み込み完了！！！');
        showVege();  // 画像の読み込みが完了したら表示する

    });

    // ローディング中のアニメーションなど
    loadQueue.addEventListener('progress',function(evt){
        console.log(evt.progress); // 読み込み状況を0〜1で表示
    });



    function showVege(){
        var tomato = new createjs.Bitmap(manifest[0].src);
        tomato.x = 100;
        tomato.y = 100;
        stage.addChild(tomato);

        var pumpkin = new createjs.Bitmap(manifest[1].src);
        pumpkin.x = 200;
        pumpkin.y = 200;
        stage.addChild(pumpkin);

        // ステージの更新
        stage.update();

    };



    // フレームレート
    createjs.Ticker.setFPS(30);
    // requestAnimationFrameの設定
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;


    // アニメーションの設定
    // ticker = 繰り返しまわす
    createjs.Ticker.addEventListener('tick', function(){
        // ステージの更新
        stage.update();


    });





});
