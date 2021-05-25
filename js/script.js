let locationInput = document.getElementById('locationInput') ;


let currentDay = document.getElementById('currentDay');
let currentDate = document.getElementById('currentDate');
let city = document.getElementById('city') ;
let degree = document.getElementById('degree') ;
let forcastIcon = document.getElementById('forcastIcon') ;
let weatherStatus = document.getElementById('weatherStatus');
let cloudPercentage = document.getElementById('cloudPercentage');
let windSpeed = document.getElementById('windSpeed');
let direction = document.getElementById('direction');

let nextDay = document.getElementById('nextDay');
let nextForcastIcon = document.getElementById('nextForcastIcon') ;
let nextDayDegree = document.getElementById('nextDayDegree') ;
let nextNightDegree = document.getElementById('nextNightDegree') ;
let nextWeatherStatus = document.getElementById('nextWeatherStatus') ;

let lastDay = document.getElementById('lastDay');
let lastForcastIcon = document.getElementById('lastForcastIcon') ;
let lastDayDegree = document.getElementById('lastDayDegree') ;
let lastNightDegree = document.getElementById('lastNightDegree') ;
let lastWeatherStatus = document.getElementById('lastWeatherStatus') ;

function refrClock() { var d=new Date();
    var day=d.getDay(); 
    var date=d.getDate(); 
    var month=d.getMonth();
    var days=new Array("sunday","monday","Tuesday","Wednesday","Thursday","friday","suterday"); 
    var months=new Array("January ","February","March","April","May","June","July","August","September","October","November","December");
    currentDate.innerHTML=months[month] + "" + date;
    currentDay.innerHTML = days[day];
    nextDay.innerHTML = days[day+1];
    lastDay.innerHTML = days[day+2];
    setTimeout("refrClock()",1000); } 
    refrClock();



function search(searchValue){
    var myHTTP = new XMLHttpRequest();
    var weatherInfo ;
    myHTTP.open("GET" , `https://api.weatherapi.com/v1/forecast.json?key=8efd728f0d5d432e8a6142308212505&q=${searchValue}&days=3`)
    myHTTP.send();

    myHTTP.addEventListener("readystatechange" , function(){
        if(myHTTP.readyState == 4 && myHTTP.status == 200 ){

            weatherInfo = JSON.parse(myHTTP.response);

            city.innerHTML = weatherInfo.location.name ;
            degree.innerHTML = `${weatherInfo.current.temp_c}<sup>o</sup>C` ;
            weatherStatus.innerHTML = weatherInfo.current.condition.text ;
            forcastIcon.innerHTML = `<img src='http:${weatherInfo.current.condition.icon}' alt="Weather data by WeatherAPI.com" border="0">`;
            cloudPercentage.innerHTML = `${weatherInfo.current.cloud}%`;
            windSpeed.innerHTML = `${weatherInfo.current.wind_mph}km/h`;
            direction.innerHTML = weatherInfo.current.wind_dir ;
            

            nextDayDegree.innerHTML = `${weatherInfo.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C` ;
            nextNightDegree.innerHTML = `${weatherInfo.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>` ;
            nextWeatherStatus.innerHTML = weatherInfo.forecast.forecastday[1].day.condition.text ;
            nextForcastIcon.innerHTML = `<img src='http:${weatherInfo.forecast.forecastday[1].day.condition.icon}' alt="Weather data by WeatherAPI.com" border="0">`;


            lastDayDegree.innerHTML = `${weatherInfo.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C` ;
            lastNightDegree.innerHTML = `${weatherInfo.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>` ;
            lastWeatherStatus.innerHTML = weatherInfo.forecast.forecastday[2].day.condition.text ;
            lastForcastIcon.innerHTML = `<img src='http:${weatherInfo.forecast.forecastday[2].day.condition.icon}' alt="Weather data by WeatherAPI.com" border="0">`;

        }
    })

}