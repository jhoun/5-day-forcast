
//Calls when button pressed
function getWeather(){

  //Request Data from Weather.com
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", fiveDayForcast);
  oReq.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=Honolulu,us&units=imperial&mode=json&APPID=3e14644f4fc2bdffc2dca11cd62cf631");
  oReq.send();

  //Function for oReq
  function fiveDayForcast(){
    var data = JSON.parse(this.responseText);
    console.log(data);
    var city = data.city.name;
    var country = data.city.country;
    var date = data.list[0].dt_txt;
    var max = data.list[0].main.temp_max;
    var min = data.list[0].main.temp_min;

    //Creates innHTML Results for City & Country
    var cityName = document.getElementById('city name');
    cityName.innerHTML = city + " , " +  country;

    for (var i = 0; i < data.list.length; i += 5){
      console.log(data.list[i]);
    }

    var getDate = document.getElementById('date');
    getDate.innerHTML = date;

    var getMaxTemp = document.getElementById('max');
    getMaxTemp.innerHTML = "Max: " + max;

    var getMinTemp = document.getElementById('min');
    getMinTemp.innerHTML = "Min: " + min;
  }
}

