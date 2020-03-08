var sample = require('./sample.json')
var station_code = sample["airoli"]
var check_day = function(day , typeofjourney) {
    if(typeofjourney == 1){
        var d = new Date()
        var dayoftoday = d.getDate()
        var da = day.split("-")
        if(da[0] - dayoftoday == 0){
            return 1
        }
        else{
            return 0
        }
    }
    else if(typeofjourney == 2){
        var d = new Date()
        var dayoftoday = d.getDate()
        var next= dayoftoday+1
        var da = day.split("-")
       
        if(da[0] - next < 1){
            return 1
        }
        else{

            return 0
        }

    }
}

var check_validity = function(time,src){
    // condition for 1hr check
    var d = new Date()
    var hr = d.getHours()
    var min = d.getMinutes()
    var c_hr = time.split(":")
    if( sample[src] == station_code){
    if(hr - c_hr[0] == 1 || hr - c_hr[0] == 0){
        if(min - c_hr[1] > 0){
            console.log("Expired!!")
        }
        else{
          return 1
        }
    }
    else{
      return 0
    }
    }
    else{
        return 1
    }
}

var check_station = function(src, dest){
     //condition for station validity
     var s_station = src.toLowerCase()
     var d_station = dest.toLowerCase()
     if(sample[s_station]<=station_code && sample[d_station]>=station_code)
     {
         return 1
     }
     else{
         return 0
     }
}

module.exports = {check_day,check_station,check_validity, station_code}