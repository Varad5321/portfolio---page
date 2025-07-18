const celsiusE1 = document.getElementById("celsius");

const kelvinE1 = document.getElementById("kelvin");

const fahrenheitE1 = document.getElementById("fahrenheit");

function computeTemp(event) {
    const currentValue = +event.target.value;

    switch(event.target.name) {

        case "celsius":
            kelvinE1.value = (currentValue + 273.15).toFixed(2);
            
            fahrenheitE1.value = (currentValue * 1.8 + 32).toFixed(2);

            break;

        case "fahrenheit":
            kelvinE1.value = (((currentValue - 32) / 1.8) + 273.15).toFixed(2);

            celsiusE1.value = ((currentValue - 32) / 1.8).toFixed(2);   

            break;

        case "kelvin" :   
         
            celsiusE1.value = (currentValue - 273.15).toFixed(2);

            fahrenheitE1.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);

            break;
            default:
            break;




    }

}

const apikey = "46f80a02ecae410460d59960ded6e1c6";

const weatherDataEl = document.getElementById("weather-data");

const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature}°C`;
    weatherDataEl.querySelector(".description").textContent = description;

    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent =
      "An error happened, please try again later";

    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}