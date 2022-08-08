let weather2 = {
    apiKey: "14f15994a238bb7b31a65705615f1517",
    fetchWeather2: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather2(data))
    },
    displayWeather2: function (data) {
      const { name } = data.city;
      const { icon, description } = data.list[0].weather[0];
      const description1 = data.list[3].weather[0].description;
      const description2  = data.list[9].weather[0].description;
      const description3  = data.list[15].weather[0].description;
      const description4  = data.list[21].weather[0].description;
      const description5  = data.list[27].weather[0].description;
      const { temp, humidity } = data.list[0].main;
      const temp1 = data.list[3].main.temp;
      const temp2 = data.list[9].main.temp;
      const temp3 = data.list[15].main.temp;
      const temp4 = data.list[21].main.temp;
      const temp5 = data.list[27].main.temp;
      // const { speed } = data.wind;
      // console.log("des:" + description)
      document.querySelector(".city").innerText = name;

      if(description == "clear sky"){
        document.querySelector(".wicon").innerText = 1;
        // document.querySelector(".description").innerText = "!!!!!!!!!!!sun"
      }else if(description == "few clouds"){
        document.querySelector(".wicon").innerText = 9;
        // document.querySelector(".description").innerText = "!!!!sun-clouds"
      }else if(description == "scattered clouds"){
        document.querySelector(".wicon").innerText = 2;
        // document.querySelector(".description").innerText = "!!!!!!!!clouds"
      }else if(description == "broken clouds"){
        document.querySelector(".wicon").innerText = 2;
        // document.querySelector(".description").innerText = "!broken-clouds"
      }else if(description == "shower rain"){
        document.querySelector(".wicon").innerText = 3;
        // document.querySelector(".description").innerText = "!!shower-rain"
      }else if(description == "rain"){
        document.querySelector(".wicon").innerText = 4;
        // document.querySelector(".description").innerText = "!!!!!!!!!rain"
      }else if(description == "thunderstorm"){
        document.querySelector(".wicon").innerText = 7;
        // document.querySelector(".description").innerText = "!thunderstorm"
      }else if(description == "snow"){
        document.querySelector(".wicon").innerText = 5;
        // document.querySelector(".description").innerText = "!!!!!!!!!snow"
      }else if(description == "mist"){
        document.querySelector(".wicon").innerText = 2;
        // document.querySelector(".description").innerText = "!!!!!!!!!mist"
      }else if(description == "overcast clouds"){
        document.querySelector(".wicon").innerText = 2;
        // document.querySelector(".description").innerText = "overcast!clouds"
      }else if(description == "moderate rain"){
        document.querySelector(".wicon").innerText = 4;
        // document.querySelector(".description").innerText = "moderate!rain"
      }else if(description == "light rain"){
        document.querySelector(".wicon").innerText = 4;
        // document.querySelector(".description").innerText = "!!!!light!rain"
      }

      if(description1 == "clear sky"){
        document.querySelector(".description1").innerText = 1;
        // document.querySelector(".description1").innerText = "!!!!!!!!!!!sun"
      }else if(description1 == "few clouds"){
        document.querySelector(".description1").innerText = 9;
        // document.querySelector(".description1").innerText = "!!!!sun-clouds"
      }else if(description1 == "scattered clouds"){
        document.querySelector(".description1").innerText = 2;
        // document.querySelector(".description1").innerText = "!!!!!!!!clouds"
      }else if(description1 == "broken clouds"){
        document.querySelector(".description1").innerText = 2;
        // document.querySelector(".description1").innerText = "!broken-clouds"
      }else if(description1 == "shower rain"){
        document.querySelector(".description1").innerText = 3;
        // document.querySelector(".description1").innerText = "!!shower-rain"
      }else if(description1 == "rain"){
        document.querySelector(".description1").innerText = 4;
        // document.querySelector(".description1").innerText = "!!!!!!!!!rain"
      }else if(description1 == "thunderstorm"){
        document.querySelector(".description1").innerText = 7;
        // document.querySelector(".description1").innerText = "!thunderstorm"
      }else if(description1 == "snow"){
        document.querySelector(".description1").innerText = 5;
        // document.querySelector(".description1").innerText = "!!!!!!!!!snow"
      }else if(description1 == "mist"){
        document.querySelector(".description1").innerText = 2;
        // document.querySelector(".description1").innerText = "!!!!!!!!!mist"
      }else if(description1 == "overcast clouds"){
        document.querySelector(".description1").innerText = 2;
        // document.querySelector(".description1").innerText = "overcast!clouds"
      }else if(description1 == "moderate rain"){
        document.querySelector(".description1").innerText = 4;
        // document.querySelector(".description1").innerText = "moderate!rain"
      }else if(description1 == "light rain"){
        document.querySelector(".description1").innerText = 4;
        // document.querySelector(".description1").innerText = "!!!!light!rain"
      }

      if(description2 == "clear sky"){
        document.querySelector(".description2").innerText = 1;
        // document.querySelector(".description2").innerText = "!!!!!!!!!!!sun"
      }else if(description2 == "few clouds"){
        document.querySelector(".description2").innerText = 9;
        // document.querySelector(".description2").innerText = "!!!!sun-clouds"
      }else if(description2 == "scattered clouds"){
        document.querySelector(".description2").innerText = 2;
        // document.querySelector(".description2").innerText = "!!!!!!!!clouds"
      }else if(description2 == "broken clouds"){
        document.querySelector(".description2").innerText = 2;
        // document.querySelector(".description2").innerText = "!broken-clouds"
      }else if(description2 == "shower rain"){
        document.querySelector(".description2").innerText = 3;
        // document.querySelector(".description2").innerText = "!!shower-rain"
      }else if(description2 == "rain"){
        document.querySelector(".description2").innerText = 4;
        // document.querySelector(".description2").innerText = "!!!!!!!!!rain"
      }else if(description2 == "thunderstorm"){
        document.querySelector(".description2").innerText = 7;
        // document.querySelector(".description2").innerText = "!thunderstorm"
      }else if(description2 == "snow"){
        document.querySelector(".description2").innerText = 5;
        // document.querySelector(".description2").innerText = "!!!!!!!!!snow"
      }else if(description2 == "mist"){
        document.querySelector(".description2").innerText = 2;
        // document.querySelector(".description2").innerText = "!!!!!!!!!mist"
      }else if(description2 == "overcast clouds"){
        document.querySelector(".description2").innerText = 2;
        // document.querySelector(".description2").innerText = "overcast!clouds"
      }else if(description2 == "moderate rain"){
        document.querySelector(".description2").innerText = 4;
        // document.querySelector(".description2").innerText = "moderate!rain"
      }else if(description2 == "light rain"){
        document.querySelector(".description2").innerText = 4;
        // document.querySelector(".description2").innerText = "!!!!light!rain"
      }

      if(description3 == "clear sky"){
        document.querySelector(".description3").innerText = 1;
        // document.querySelector(".description3").innerText = "!!!!!!!!!!!sun"
      }else if(description3 == "few clouds"){
        document.querySelector(".description3").innerText = 9;
        // document.querySelector(".description3").innerText = "!!!!sun-clouds"
      }else if(description3 == "scattered clouds"){
        document.querySelector(".description3").innerText = 2;
        // document.querySelector(".description3").innerText = "!!!!!!!!clouds"
      }else if(description3 == "broken clouds"){
        document.querySelector(".description3").innerText = 2;
        // document.querySelector(".description3").innerText = "!broken-clouds"
      }else if(description3 == "shower rain"){
        document.querySelector(".description3").innerText = 3;
        // document.querySelector(".description3").innerText = "!!shower-rain"
      }else if(description3 == "rain"){
        document.querySelector(".description3").innerText = 4;
        // document.querySelector(".description3").innerText = "!!!!!!!!!rain"
      }else if(description3 == "thunderstorm"){
        document.querySelector(".description3").innerText = 7;
        // document.querySelector(".description3").innerText = "!thunderstorm"
      }else if(description3 == "snow"){
        document.querySelector(".description3").innerText = 5;
        // document.querySelector(".description3").innerText = "!!!!!!!!!snow"
      }else if(description3 == "mist"){
        document.querySelector(".description3").innerText = 2;
        // document.querySelector(".description3").innerText = "!!!!!!!!!mist"
      }else if(description3 == "overcast clouds"){
        document.querySelector(".description3").innerText = 2;
        // document.querySelector(".description3").innerText = "overcast!clouds"
      }else if(description3 == "moderate rain"){
        document.querySelector(".description3").innerText = 4;
        // document.querySelector(".description3").innerText = "moderate!rain"
      }else if(description3 == "light rain"){
        document.querySelector(".description3").innerText = 4;
        // document.querySelector(".description3").innerText = "!!!!light!rain"
      }

      if(description4 == "clear sky"){
        document.querySelector(".description4").innerText = 1;
        // document.querySelector(".description4").innerText = "!!!!!!!!!!!sun"
      }else if(description4 == "few clouds"){
        document.querySelector(".description4").innerText = 9;
        // document.querySelector(".description4").innerText = "!!!!sun-clouds"
      }else if(description4 == "scattered clouds"){
        document.querySelector(".description4").innerText = 2;
        // document.querySelector(".description4").innerText = "!!!!!!!!clouds"
      }else if(description4 == "broken clouds"){
        document.querySelector(".description4").innerText = 2;
        // document.querySelector(".description4").innerText = "!broken-clouds"
      }else if(description4 == "shower rain"){
        document.querySelector(".description4").innerText = 3;
        // document.querySelector(".description4").innerText = "!!shower-rain"
      }else if(description4 == "rain"){
        document.querySelector(".description4").innerText = 4;
        // document.querySelector(".description4").innerText = "!!!!!!!!!rain"
      }else if(description4 == "thunderstorm"){
        document.querySelector(".description4").innerText = 7;
        // document.querySelector(".description4").innerText = "!thunderstorm"
      }else if(description4 == "snow"){
        document.querySelector(".description4").innerText = 5;
        // document.querySelector(".description4").innerText = "!!!!!!!!!snow"
      }else if(description4 == "mist"){
        document.querySelector(".description4").innerText = 2;
        // document.querySelector(".description4").innerText = "!!!!!!!!!mist"
      }else if(description4 == "overcast clouds"){
        document.querySelector(".description4").innerText = 2;
        // document.querySelector(".description4").innerText = "overcast!clouds"
      }else if(description4 == "moderate rain"){
        document.querySelector(".description4").innerText = 4;
        // document.querySelector(".description4").innerText = "moderate!rain"
      }else if(description4 == "light rain"){
        document.querySelector(".description4").innerText = 4;
        // document.querySelector(".description4").innerText = "!!!!light!rain"
      }

      if(description5 == "clear sky"){
        document.querySelector(".description5").innerText = 1;
        // document.querySelector(".description5").innerText = "!!!!!!!!!!!sun"
      }else if(description5 == "few clouds"){
        document.querySelector(".description5").innerText = 9;
        // document.querySelector(".description5").innerText = "!!!!sun-clouds"
      }else if(description5 == "scattered clouds"){
        document.querySelector(".description5").innerText = 2;
        // document.querySelector(".description5").innerText = "!!!!!!!!clouds"
      }else if(description5 == "broken clouds"){
        document.querySelector(".description5").innerText = 2;
        // document.querySelector(".description5").innerText = "!broken-clouds"
      }else if(description5 == "shower rain"){
        document.querySelector(".description5").innerText = 3;
        // document.querySelector(".description5").innerText = "!!shower-rain"
      }else if(description5 == "rain"){
        document.querySelector(".description5").innerText = 4;
        // document.querySelector(".description5").innerText = "!!!!!!!!!rain"
      }else if(description5 == "thunderstorm"){
        document.querySelector(".description5").innerText = 7;
        // document.querySelector(".description5").innerText = "!thunderstorm"
      }else if(description5 == "snow"){
        document.querySelector(".description5").innerText = 5;
        // document.querySelector(".description5").innerText = "!!!!!!!!!snow"
      }else if(description5 == "mist"){
        document.querySelector(".description5").innerText = 2;
        // document.querySelector(".description5").innerText = "!!!!!!!!!mist"
      }else if(description5 == "overcast clouds"){
        document.querySelector(".description5").innerText = 2;
        // document.querySelector(".description5").innerText = "overcast!clouds"
      }else if(description5 == "moderate rain"){
        document.querySelector(".description5").innerText = 4;
        // document.querySelector(".description5").innerText = "moderate!rain"
      }else if(description5 == "light rain"){
        document.querySelector(".description5").innerText = 4;
        // document.querySelector(".description5").innerText = "!!!!light!rain"
      }


      document.querySelector(".temp").innerText = ~~temp + "°C";
      document.querySelector(".temp1").innerText = ~~temp1;
      document.querySelector(".temp2").innerText = ~~temp2;
      document.querySelector(".temp3").innerText = ~~temp3;
      document.querySelector(".temp4").innerText = ~~temp4;
      document.querySelector(".temp5").innerText = ~~temp5;
      // document.querySelector(".humidity").innerText = "Humidity!:!" + humidity + "%";
      // document.querySelector(".wind").innerText = "Wind!speed!:!" + speed + "!km/h";
    },
    search2: function () {
      this.fetchWeather2(document.querySelector(".search-bar").value);
    },
}
// weather.fetchWeather("osaka")
function w2(){
  weather2.fetchWeather2("osaka")
  // console.log("get!!")
}    
var Timer = setInterval("w2()",1000);