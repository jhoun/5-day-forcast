
//Calls when button pressed
function getWeather(){
var textField = document.getElementById('textfield');
var newCity = textField.value;


  //Request Data from Weather

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", fiveDayForcast);
  oReq.open("GET", `http://api.openweathermap.org/data/2.5/forecast?q=${newCity},us&units=imperial&mode=json&APPID=3e14644f4fc2bdffc2dca11cd62cf631`);
  oReq.send();

  //Function for oReq
  function fiveDayForcast(){
    var data = JSON.parse(this.responseText);
    var city = data.city.name;
    var country = data.city.country;


    //Grabs "results Id"
    var results = document.getElementById('results');


    //creates "node" from results
    var node = document.createElement('div');
    node.classList.add('node');
    results.appendChild(node);


    //creates "city" dev
    var createCity = document.createElement('div');
    createCity.classList.add('city');
    createCity.innerHTML = `${city}, ${country}`;
    node.appendChild(createCity);

    //creates content from results
    var content = document.createElement('div');
    content.classList.add('content');
    node.appendChild(content);


    //loops through all the dates

    for (var i = 0; i < data.list.length; i += 9){
    var date = moment(data.list[i].dt_txt).format("ddd, MMMM Do");
    var max = data.list[i].main.temp_max;
    var min = data.list[i].main.temp_min;
    var description = data.list[i].weather[0].description;


      var weatherContainer = document.createElement('div');
      weatherContainer.classList.add('weatherContainer');
      content.appendChild(weatherContainer);

      var createDate = document.createElement('div');
      createDate.classList.add('date');
      createDate.innerHTML = date;
      weatherContainer.appendChild(createDate);

      var img = document.createElement('img');
      if(description === "light rain"){
        img.src = 'http://i.giphy.com/W9qCmeTuUoaFG.gif';
      } else if (description === "clear sky" || "scattered clouds"){
        img.src = 'http://i.giphy.com/KV1s4kSJHaY3m.gif';
      }
      weatherContainer.appendChild(img);

      var createMax = document.createElement('div');
      createMax.classList.add('max');
      createMax.innerHTML = `High: ${max}°`;
      weatherContainer.appendChild(createMax);

    }
    var nodeCount = document.getElementsByClassName('node');

    for (var i = 0; i < nodeCount.length; i++){
    console.log(results.insertBefore(nodeCount[i], nodeCount[0]));
  }
    // console.log(nodeCount);
    // console.log(nodeCount[0]);
    // console.log(nodeCount[1]);
    // console.log(results.insertBefore(nodeCount[2], nodeCount[0]));
    // console.log(nodeCount[0]);
    // console.log(nodeCount[1]);
    // console.log(nodeCount[2]);
    // console.log(results.insertBefore(nodeCount[3], nodeCount[0]));
    // console.log(results.insertBefore(nodeCount[4], nodeCount[0]));
  }
}

