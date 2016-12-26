
//Calls when button pressed
function getWeather(){

var textField = document.getElementById('textfield')
var newCity = textField.value;

  //Request Data from Weather.com
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", fiveDayForcast);
  oReq.open("GET", `http://api.openweathermap.org/data/2.5/forecast?q=${newCity},us&units=imperial&mode=json&APPID=3e14644f4fc2bdffc2dca11cd62cf631`);
  oReq.send();

  //Function for oReq
  function fiveDayForcast(){
    var data = JSON.parse(this.responseText);
    console.log(data);
    var city = data.city.name;
    var country = data.city.country;

    //Grabs "results Id"
    var results = document.getElementById('results');

    //creates "city" dev
    var createCity = document.createElement('div');
    createCity.id = 'city';
    createCity.innerHTML = city + ", " +  country;
    results.appendChild(createCity);

    //creates content from results
    var content = document.createElement('div');
    content.classList.add('content');
    results.appendChild(content);


    //loops through all the dates
    for (var i = 0; i < data.list.length; i += 9){
    var date = data.list[i].dt_txt;
    var max = data.list[i].main.temp_max;
    var min = data.list[i].main.temp_min;

    console.log(moment(data.list[i].dt_txt).format());

    var weatherContainer = document.createElement('div');
    weatherContainer.classList.add('weatherContainer');
    content.appendChild(weatherContainer);

    var createDate = document.createElement('div');
    createDate.classList.add('date');
    createDate.innerHTML = date;
    weatherContainer.appendChild(createDate);

    var createMax = document.createElement('div');
    createMax.classList.add('max');
    createMax.innerHTML = "Max: " + max;
    weatherContainer.appendChild(createMax);

    var createMin = document.createElement('div');
    createMin.classList.add('min');
    createMin.innerHTML = "Min: " + min;
    weatherContainer.appendChild(createMin);
    }
  }
}

