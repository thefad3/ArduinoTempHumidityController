$(document).ready(function(){
    var url ="https://data.sparkfun.com/output/wpDpgRyG5wfOQpQNJaaD.json";
    $.get(url, function(data) {
        for(i=0; i<data.length; i++){
            $(".result").append('<div>','<h5>Time: </h5>', data[i].timestamp,  ' <h5>Humidity: </h5>', data[i].h, '<h5> Temp: </h5>', data[i].t, '<hr width="100%"></div>');
        }
    });

});