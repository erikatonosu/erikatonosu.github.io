$(function(){

  // // 加速度のイベント
  // window.addEventListener('devicemotion', shakeDevice);
  //
  //
  // function shakeDevice(evt){
  //     var x = evt.acceleration.x;
  //     var y = evt.acceleration.y;
  //     var z = evt.acceleration.z;
  //
  //     $('#device li').eq(0).text('加速度X: ' + x);
  //     $('#device li').eq(1).text('加速度Y: ' + y);
  //     $('#device li').eq(2).text('加速度Z: ' + z);
  //
  //     if(Math.abs(x) > 15 || Math.abs(y) > 15 || Math.abs(z) > 15){
  //         $('#result').text('振ったよ');
  //
  //     }
  //
  // }


  // 傾き ジャイロセンサー
  window.addEventListener('deviceorientation', roteDevice);

  function roteDevice(evt){
      // X軸
      var x = evt.beta;
      // Y軸
      var y = evt.gamma;
      // Z軸
      var z = evt.alpha;

      $('#device li').eq(0).text('傾き X: ' + x);
      $('#device li').eq(1).text('傾き Y: ' + y);
      $('#device li').eq(2).text('傾き Z: ' + z);



  }


});
