$(document).ready(function(){
    var url ="https://data.sparkfun.com/output/wpDpgRyG5wfOQpQNJaaD.json";
    
    $.get(url, function(data) {
        console.log(data);
        
        for(i=0; i<data.length; i++){
            console.log(data[i].h);
            console.log(data[i].t);
            
            $(".result").append('<div class="row">','Time: ', data[i].timestamp,  'Humidity: ', data[i].h, ' Temp: ', data[i].t, '</div>');

        }
        

    
    });

});