let UserLocation = document.querySelector("input");
let UserCity = document.querySelectorAll(".location");
let baseUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let Api ="&appid=9d72889267a89c2b9b8bde2123db6a40";
let UserCurrentDate = document.querySelector(".date");
let UserCurrentTime = document.querySelector(".time")
let weatherIcon = document.querySelector(".weather-logo")
let weatherIconBaseUrl = "./assets/weather-icons/";
let weatherDescription = document.querySelector(".weather-condition");
let temp = document.querySelector(".temperature");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#w-speed");
let currpressure = document.querySelector("#pressure");
let  windDirection = document.querySelector("#w-direction");
let  container = document.querySelector(".app");




const weekDays = {
    0 : "Sunday",
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday",
}
const allMonths = {
    0 : "Jan",
    1 : "Feb",
    2 : "Mar",
    3 : "Apr",
    4 : "May",
    5 : "Jun",
    6 : "Jul",
    7 : "Aug",
    8 : "Sep",
    9 : "Oct",
    10 : "Nov",
    11 : "Dec", 
}

const getTimeString = (hour , min)=>{
    
    if(hour >=13){
        
        if (min <= 9) {
            return  `${hour-12}:0${min} pm` ;
        }else{
            return  `${hour-12}:${min} pm` ;
        }    
       
    }

    if (min <= 9) {
        return  `${hour}:0${min} pm` ;
    }else{
        return  `${hour}:${min} pm` ;
    } 
    
}

let updatedDate = async ()=>{
       let date =  new Date();
       let currDay = date.getDay();
       let currDate = date.getDate();
       let currMonth = date.getMonth();
       let UserCurrentHour = date.getHours();
       let UserCurrentMin = date.getMinutes();
       UserCurrentDate.innerText = `${weekDays[currDay]} ${allMonths[currMonth]} ${currDate} `;
       UserCurrentTime.innerText = await getTimeString(UserCurrentHour, UserCurrentMin);
}

const updateWeatherData = (weatherData)=>{

    UserCity[0].innerText = weatherData.name;
    UserCity[1].innerText = weatherData.name;
    updatedDate();
    
    weatherDescription.innerText = weatherData.weather[0].description;
    temp.innerText = `${Math.round(weatherData.main.temp)}°C`;
    humidity.innerText = `${weatherData.main.humidity}%`;
    windSpeed.innerText = `${weatherData.wind.speed}kph`;
    currpressure.innerText = `${weatherData.main.pressure}mbar`;
    windDirection.innerText = `${weatherData.wind.deg}°`;


    if (weatherData.weather[0].main == "Ash") {
        weatherIcon.src = `${weatherIconBaseUrl}ash.png`;
      }else if (weatherData.weather[0].main == "Clear") {
        weatherIcon.src = `${weatherIconBaseUrl}clear.png`;
      } else if (weatherData.weather[0].main == "Clouds") {
        weatherIcon.src = `${weatherIconBaseUrl}clouds.png`;
      } else if (weatherData.weather[0].main == "Drizzle") {
        weatherIcon.src = `${weatherIconBaseUrl}drizzle.png`;
      } else if (weatherData.weather[0].main == "Dust") {
        weatherIcon.src = `${weatherIconBaseUrl}dust.png`;
      } else if (weatherData.weather[0].main == "Fog") {
        weatherIcon.src = `${weatherIconBaseUrl}fog.png`;
      } else if (weatherData.weather[0].main == "Haze") {
        weatherIcon.src = `${weatherIconBaseUrl}haze.png`;
      } else if (weatherData.weather[0].main == "Mist") {
        weatherIcon.src = `${weatherIconBaseUrl}mist.png`;
      } else if (weatherData.weather[0].main == "Rain") {
        weatherIcon.src = `${weatherIconBaseUrl}rain.png`;
      } else if (weatherData.weather[0].main == "Sand") {
        weatherIcon.src = `${weatherIconBaseUrl}sand.png`;
      } else if (weatherData.weather[0].main == "Smoke") {
        weatherIcon.src = `${weatherIconBaseUrl}smoke.png`;
      } else if (weatherData.weather[0].main == "Snow") {
        weatherIcon.src = `${weatherIconBaseUrl}snow.png`;
      } else if (weatherData.weather[0].main == "Squall") {
        weatherIcon.src = `${weatherIconBaseUrl}squall.png`;
      } else if (weatherData.weather[0].main == "Thunderstorm") {
        weatherIcon.src = `${weatherIconBaseUrl}thunderstorm.png`;
      } else if (weatherData.weather[0].main == "Tornado") {
        weatherIcon.src = `${weatherIconBaseUrl}tornado.png`;
      }
    
}


const getCityWeatherData = async (city)=>{
    let response = await fetch(`${baseUrl}${city.toLowerCase()}${Api}`);
    let weatherData = await response.json();
    await updateWeatherData(weatherData);
}

window.addEventListener("load",()=>{
    document.body.classList.add('loaded');
    getCityWeatherData("Amravati");
})

// Wait for the window to load completely

  

document.querySelector("button").addEventListener("click",(evt) =>{
  evt.preventDefault();
  getCityWeatherData(UserLocation.value);
 
});