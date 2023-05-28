//all of my variables
var APIKey = "6fec1c3703735d08a384263c74be880a";
var city = "New York";
var today = moment().format('L');
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

function displayWeather(city) {
  document.getElementById('weather-info').innerText = `Weather information for ${city1}`;
}


console.log(today);