$(function(){
    //GPS
    navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;

        console.log(lat, lon);

        // 定数 = 値が変わらない設定
        const apikey = '7313e1ec3373e1e5ff3e69e878f40126';
        // openweathermapのお天気情報のURL
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +'&appid=' + apikey;


        $.ajax({
            url:url,
            dataType:'json'
        }).done(function(data){

        }).fail(function(){
            console.log('ajax error!!!');
        });



    });
});
