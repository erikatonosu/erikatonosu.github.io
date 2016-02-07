// 先読みするリスト
var manifest = [
    {src:'img/tomato.png'},
    {src:'img/pumpkin.png'},
    {src:'img/greenPepper.png'}
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
    });






    // フレームレート
    createjs.Ticker.setFPS(30);
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;


    // アニメーションの設定
    // ticker = 繰り返しまわす
    createjs.Ticker.addEventListener('tick', function(){
        // ステージの更新
        stage.update();


    });





});