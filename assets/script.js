//weather API Key
var APIKey = "6fec1c3703735d08a384263c74be880a";
var city = "Miami";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var newYorkURL = "https://api.openweathermap.org/data/2.5/forecast?lat=40.7128&lon=-74.0060&appid={APIKey}"

console.log(newYorkURL);