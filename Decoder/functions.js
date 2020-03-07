var sample = require('./sample.json')
var station_code = sample["Nerul"]
var check_day = function(day , typeofjourney) {
    if(typeofjourney == 1){
        var d = new Date()
        var dayoftoday = d.getDate()
        var da = day.split("-")
        if(da[0] - dayoftoday == 0){
            console.log("accepted!!!")
        }
        else{
            console.log("Reject")
        }
    }
    else if(typeofjourney == 2){
        var d = new Date()
        var dayoftoday = d.getDate()
        var next= dayoftoday+1
        var da = day.split("-")
       
        if(next-da[0] <= 1){
            console.log('Accepted')
        }
        else{

            console.log('Not accepted')
        }

    }
}

var check_validity = function(time){
    // condition for 1hr check
    var d = new Date()
    var hr = d.getHours()
    var min = d.getMinutes()
    var c_hr = time.split(":")
    if(hr - c_hr[0] == 1 || hr - c_hr[0] == 0){
        if(min - c_hr[1] > 0){
            console.log("Expired!!")
        }
        else{
          console.log("Accepted!!")
        }
    }
    else{
      console.log("Expired!!")
    }
}

var check_station = function(src, dest){
     //condition for station validity
     var s_station = src
     var d_station = dest
     if(sample[s_station]<=station_code && sample[d_station]>=station_code)
     {
         console.log('Gate open')
     }
     else{
         console.log('Call TC')
     }
}

module.exports = {check_day,check_station,check_validity}