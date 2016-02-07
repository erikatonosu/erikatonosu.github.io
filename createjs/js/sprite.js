// 先読みするリスト(画像などを先に読ませておく)
var manifest = [
    {src:'img/calcium.png'},
    {src:'img/iron.png'},
    {src:'img/vitaminC.png'}
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



    function showVege(){
        // スプライトシートの設定
        var vcSprite = new createjs.SpriteSheet(vitaminCSprite);
        // スプライトの設定
        var vitaminC = new createjs.Sprite(vcSprite,'stand');
        stage.addChild(vitaminC);
        vitaminC.x = 150;
        vitaminC.y = 400;
        vitaminC.alpha = 0;
        // アニメーション
        createjs.Tween.get(vitaminC).to({alpha:1},500).wait(1000).to({x:500},4000);


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
