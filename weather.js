let weather = {
    apiKey: "436bf96706a1081d7368932705de594e",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      // console.log("des:" + description)
      document.querySelector(".city").innerText = name;
      if(description == "clear sky"){
        document.querySelector(".wicon").innerText = 1;
        document.querySelector(".description").innerText = "!!!!!!!!!!!sun"
      }else if(description == "few clouds"){
        document.querySelector(".wicon").innerText = 9;
        document.querySelector(".description").innerText = "!!!!sun-clouds"
      }else if(description == "scattered clouds"){
        document.querySelector(".wicon").innerText = 2;
        document.querySelector(".description").innerText = "!!!!!!!!clouds"
      }else if(description == "broken clouds"){
        document.querySelector(".wicon").innerText = 2;
        document.querySelector(".description").innerText = "!broken-clouds"
      }else if(description == "shower rain"){
        document.querySelector(".wicon").innerText = 3;
        document.querySelector(".description").innerText = "!!shower-rain"
      }else if(description == "rain"){
        document.querySelector(".wicon").innerText = 4;
        document.querySelector(".description").innerText = "!!!!!!!!!rain"
      }else if(description == "thunderstorm"){
        document.querySelector(".wicon").innerText = 7;
        document.querySelector(".description").innerText = "!thunderstorm"
      }else if(description == "snow"){
        document.querySelector(".wicon").innerText = 5;
        document.querySelector(".description").innerText = "!!!!!!!!!snow"
      }else if(description == "mist"){
        document.querySelector(".wicon").innerText = 2;
        document.querySelector(".description").innerText = "!!!!!!!!!mist"
      }else if(description == "overcast clouds"){
        document.querySelector(".wicon").innerText = 2;
        document.querySelector(".description").innerText = "overcast!clouds"
      }else if(description == "moderate rain"){
        document.querySelector(".wicon").innerText = 4;
        document.querySelector(".description").innerText = "moderate!rain"
      }else if(description == "light rain"){
        document.querySelector(".wicon").innerText = 4;
        document.querySelector(".description").innerText = "!!!!light!rain"
      }
      // document.querySelector(".temp").innerText = "Temperature!:!" + temp + "°C";
      // document.querySelector(".humidity").innerText = "Humidity!:!" + humidity + "%";
      // document.querySelector(".wind").innerText = "Wind!speed!:!" + speed + "!km/h";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
}
// weather.fetchWeather("osaka")
function w(){
  weather.fetchWeather("osaka")
  // console.log("get!!")
}    
var Timer = setInterval("w()",1000);