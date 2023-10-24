const apiKey = "1e5a8dc4795d9efd7cdc3d759d655e00";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".searchicon img");
const weatherIcon = document.querySelector(".weatherimage img");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (!response.ok) throw new Error("HTTP error " + response.statusText);
  var data = await response.json();
  console.log(data);
  document.querySelector(".areaname").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".percentage").innerHTML = data.main.humidity + " %";
  document.querySelector(".windspeed").innerHTML = data.wind.speed + " kph";
  if (data.weather[0].main == "Cloud") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./images/clear.png";
  }
}
searchbtn.addEventListener("click", () => {
  let cityName = searchBox.value;
  checkWeather(cityName);
});
