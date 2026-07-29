<div align="center">
<h1>Weather Search Application</h1>

![HTML5](https://img.shields.io/badge/HTML5-48586E?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-F3EFF0?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-829FC4?style=for-the-badge&logo=javascript&logoColor=black)
![alt text](834_1x_shots_so-1.png)
**A sleek weather app delivering real-time forecasts for any city, worldwide.**

</div>

This project is a weather search application which displays live weather updates for the city that the user has typed into the search function. By connecting to an external API, real time information about the current temperature and weather conditions, as well as a 5 day weather forecast, are displayed to the user.
The project is deployed on Netlify and can be accessed following the link below.

<div align="center">

[![Netlify Status](https://img.shields.io/badge/Live%20Demo-48586E?style=for-the-badge&logo=netlify&logoColor=white)](https://weathersearch28.netlify.app/)

</div>

## Features

- 🔍 Search by city
- 🌡️ Current temperature
- ☀️ Current weather conditions
- 📅 5-day weather forecast

## Technologies Used

- HTML 5
- CSS 3
- Javascript
- Axios
- Netlify

## Installation

### Prerequisites

- A code editor (e.g. [VS Code](https://code.visualstudio.com/))
- A modern web browser (e.g. Chrome, Firefox, Edge)
- [Git](https://git-scm.com/) installed, to clone the repository
- A GitHub account
- A free weather API key ([sign up here](https://www.shecodes.io/learn/apis/weather))

### 1. Clone the repository

```
git clone <repository_url>
cd Weather-Search-Application
```

### 2. Add your API key

**1. Install Axios**

- The Axios library needs to be installed in order to make HTTP requests to the API.

- Access the Axios library following this link: https://github.com/axios/axios

- Use the cdn approach to install Axios by copying the below code into the head of your HTML file:

```
<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
```

<br>

**2. Set up an API key:**

Access the following website to get a free API key for the project:

https://www.shecodes.io/learn/apis/weather

<br>

**3. API URL:**

The project uses 2 external APIs as detailed below. The **Current Weather API** provides weather data for the current day. The **Forecast Weather API** provides data for up to 7 subsequent days.

**Current Weather API:**

https://api.shecodes.io/weather/v1/current?query={query}&key={key}

| Parameters |          |                                      |
| ---------- | -------- | ------------------------------------ |
| query      | required | The name of a city (example: Lisbon) |
| key        | required | Your api key                         |
| units      | optional | Either metric or imperial            |

  <br>

**Forecast Weather API:**

https://api.shecodes.io/weather/v1/forecast?query={query}&key={key}

| Parameters |          |                                      |
| ---------- | -------- | ------------------------------------ |
| query      | required | The name of a city (example: Lisbon) |
| key        | required | Your api key                         |
| units      | optional | Either metric or imperial            |

<br>

### Deploying the project on netlify

The project is hosted on Netlify. Netlify should be accessed via your Github account to ensure that when new changes are pushed to Github, the application hosted on Netlify will update the changes automatically.

- Push your project to your remote Github repository.

- Log into Netlify with your Github account:  
  https://www.netlify.com/

- Click on **Create New Site from Git** button

- Authorise your Github account for continuous deployment by selecting the repository your application is stored in

- Click **Deploy Site** button - this will push the website online
