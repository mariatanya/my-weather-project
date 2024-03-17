function changeCityTemp(event) {
  event.preventDefault();
  let cityNameInput = document.querySelector("#city-name");
  let cityName = cityNameInput.value.toLowerCase().trim();
  let cityHeading = document.querySelector("h1");
  cityHeading.innerHTML = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  let apiKey = "b4d4bae12atf537f223c2747of06ba2b";
  let city = cityName;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then((response) => {
    let celsiusTemp = response.data.temperature.current;
    let temp = document.querySelector(".value");
    temp.innerHTML = Math.round(celsiusTemp);
  });
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCityTemp);

let currentTime = new Date();
days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
today = days[currentTime.getDay()];

let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let time = hour + ":" + minutes;

function showTime(day, time) {
  let now = document.querySelector(".current-time");
  now.innerHTML = day + " " + time;
}

showTime(today, time);
