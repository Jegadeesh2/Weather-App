//Elements

const getCityName = document.querySelector(".cityName");
const errorMsg = document.querySelector(".error");
const displayDegreeEle = document.querySelector(".displayDegree");
const displayClimateEle = document.querySelector(".displayClimate");
const displayCityEle = document.querySelector(".displayCity");
const searchBtn = document.querySelector(".search-btn");
const displayEle = document.querySelector(".display");
const bodyEle = document.querySelector(".body");

//AddEventListeners
searchBtn.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${getCityName.value}&appid=c6e908417227f7899e1ed1a4b59a4259`
  )
    .then((res) => res.json())
    .then((data) => {
      //variables
      let city = data["name"];
      let degree = data["main"]["temp"];
      let climate = data["weather"][0]["description"];
      // Kelvin to degree celsius 
      degree =  Math.round(degree - 273.15);
      //Conditions
      if (degree <= 0 && degree <= 7) {
        displayDegreeEle.innerText = `Temperature : ${degree} °c`;
        bodyEle.style.backgroundImage = "url('./images/snow.gif')";
        displayEle.style.color = "white";
        displayClimateEle.innerText = ` Climate : ${climate}`;
        displayCityEle.innerText = `City : ${city}`;
      } else if (degree >= 8 && degree <= 15) {
        displayDegreeEle.innerText = `Temperature : ${degree} °c`;
        bodyEle.style.backgroundImage = "url('./images/rainy.gif')";
        displayEle.style.color = "white";
        displayClimateEle.innerText = ` Climate : ${climate}`;
        displayCityEle.innerText = `City : ${city}`;
      } else if (degree >= 16 && degree <= 26) {
        displayDegreeEle.innerText = `Temperature : ${degree} °c`;
        bodyEle.style.backgroundImage = "url('./images/rainy.gif')";
        displayEle.style.color = "white";
        displayClimateEle.innerText = ` Climate : ${climate}`;
        displayCityEle.innerText = `City : ${city}`;
      } else if (degree >= 27 && degree <= 34) {
        displayDegreeEle.innerText = `Temperature : ${degree} °c`;
        bodyEle.style.backgroundImage = "url('./images/normal.gif')";
        displayEle.style.color = "white";
        displayClimateEle.innerText = ` Climate : ${climate}`;
        displayCityEle.innerText = `City : ${city}`;
      } else if (degree > 35) {
        displayDegreeEle.innerText = `Temperature : ${degree} °c`;
        bodyEle.style.backgroundImage = "url('./images/sunny.gif')";
        displayEle.style.color = "white";
        displayClimateEle.innerText = ` Climate : ${climate}`;
        displayCityEle.innerText = `City : ${city}`;
      }
    })
    .catch((err) => {
      errorMsg.innerText = "Enter a valid city name";
      alert("Wrong city Name");
      getCityName.addEventListener("focus", function () {
        errorMsg.innerText = "";
      });
    });
});
