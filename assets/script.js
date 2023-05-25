//weather API Key
//var APIKey = "6fec1c3703735d08a384263c74be880a";
//var city1 = "New York";
//var queryURL = "http://api.openweathermap.org/data//2.5/weather?q=" + city1 + "&appid=" + APIKey;
//var newYorkURL = "https://api.openweathermap.org/data/2.5/forecast?lat=40.7128&lon=-74.0060&appid={APIKey}"


//function displayWeather(city1) {
  //  document.getElementById('newYorkURL').innerText = `Weather information for ${city1}`;
 // }


var APIKey = "6fec1c3703735d08a384263c74be880a";
var city1 = "New York";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city1 + "&appid=" + APIKey;

function displayWeather(city1) {
  document.getElementById('weather-info').innerText = `Weather information for ${city1}`;
}

console.log(displayWeather);
