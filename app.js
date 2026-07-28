function refreshWeather(response) {
  // Json response - information about city we are searching for
  let temperatureElement = document.querySelector("#app-temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city; // updates city response based on api response
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description; // updates weather description based on api response
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`; // updates humidity based on api response
  windElement.innerHTML = `${response.data.wind.speed}km/h`; // updates wind speed based on api response
  temperatureElement.innerHTML = Math.round(temperature); // updates current temperature based on api response
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`; // updates image icon based on api response

  getForecast(response.data.city);
}

function formatDate(date) {
  let day;
  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  // make api call and update the interface
  let apiKey = "553c50a943f58673fbta5ob01bd1cb5a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather); // calls refreshWeather function
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = `553c50a943f58673fbta5ob01bd1cb5a`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

// function for displaying weather forecast for each day
function displayForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index > 0 && index < 6) {
      forecastHtml =
        forecastHtml +
        `
   <div class="weather-forecast-day">
     <div class="weather-forecast-date">${formatDay(day.time)}</div>

  <img src="${day.condition.icon_url}" class="weather-forecast-icon"/>
     <div class="weather-forecast-temperatures">
       <div class="weather-forecast-temperature">
         <strong>${Math.round(day.temperature.maximum)}°</strong>  
       </div>
       <div class="weather-forecast-temperature">${Math.round(day.temperature.minimum)}°</div>
     </div>
   </div>`;
    }
  });

  // Once loop has run, inject forecasthtml text into html
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
