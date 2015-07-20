$(document).ready(function(){
    var url ="https://data.sparkfun.com/output/wpDpgRyG5wfOQpQNJaaD.json";
    $.get(url, function(data) {
      
            $(".temp").prepend(data[0].t);
            $(".time").append(data[0].timestamp);
            $(".humid").prepend(Math.round(data[0].h));
            
        for(i=0; i<data.length; i++){
            var date = new Date(Date.parse(data[i].timestamp));
            var d = new Date();
            $(".result").append('<div class="col-md-6"><h3><span class="glyphicon glyphicon-chevron-right"></span>  '+d.toDateString(date)+'</h3><div class="blockOutline bg-primary"><p>'+'<blockquote><b>Time:</b> '+date.toTimeString()+'</blockquote><blockquote><b>Humidity:</b> '+Math.round(data[i].h)+ ' %</blockquote><blockquote> <b>Temp:</b> '+ data[i].t+ ' &#8457</blockquote></p></div></div>');
        }
    });
});