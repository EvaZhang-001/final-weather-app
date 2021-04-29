function showTime(timestamp) {
  let time = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[time.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[time.getMonth()];
  let date = time.getDate();
  let hour = time.getHours();
  if (hour < 10) {
    hour = `0:${hour}`;
  }

  let minute = time.getMinutes();
  if (minute < 10) {
    minute = `0:${minute}`;
  }
  return `${day}, ${month} ${date}, ${hour}:${minute}`;
}
function showTemperature(response) {
  console.log(response);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = showTime(response.data.dt * 1000);
}

let city = "Bern";
let apiKey = "68987c4f78ac703ea3b4c1f3b5c684ad";
let unit = "metric";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

axios.get(url).then(showTemperature);
