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

  console.log(response.data);

  cityElement.innerHTML = response.data.city; // updates city response based on api response
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description; // updates weather description based on api response
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`; // updates humidity based on api response
  windElement.innerHTML = `${response.data.wind.speed}km/h`; // updates wind speed based on api response
  temperatureElement.innerHTML = Math.round(temperature); // updates current temperature based on api response
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`; // updates image icon based on api response
}

function formatDate(date) {
  switch (date.getDay()) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Weds";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
  }

  let minutes = date.getMinutes();
  let hours = date.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  // make api call and update the interface
  let apiKey = "553c50a943f58673fbta5ob01bd1cb5a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
