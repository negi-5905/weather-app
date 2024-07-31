const apiId = "462adfe1c59dfa5c54e936fb87466e38";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric";
const weatherIcon = document.querySelector(".weather-icon");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const btn = document.querySelector("#btn");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
  let cityName = input.value;

  fetch(apiURL+ `&q=${cityName}` + `&appid=${apiId}`)
    .then((response) => {
        if(response.status == 404){
            document.querySelector('.error').style.display = 'block'
            document.querySelector('.weather').style.display = 'none'
        }
        else{
            return response.json();
        }
      
    })
    .then((user) => {
      console.log(user);
      temp.innerHTML = `${Math.round(user.main.temp)}°C`;
      city.innerHTML = user.name;
      humidity.innerHTML = user.main.humidity + "%";
      wind.innerHTML = `${Math.round(user.wind.speed)} Km/h`;

      weatherIcon.setAttribute(
        "src",
        "images/" + user.weather[0].main + ".png"
      );

      // if(user.weather[0].main == 'Clouds'){
      //     weatherIcon.src = "images\clouds.png";
      // }
      // else if(user.weather[0].main == 'Clear'){
      //     weatherIcon.src = "images\clear.png"
      // }
      // else if(user.weather[0].main == 'Drizzle'){
      //     weatherIcon.src = "images\drizzle.png"
      // }
      // else if(user.weather[0].main == 'Mist'){
      //     weatherIcon.src = "images\mist.png"
      // }
      // else if(user.weather[0].main == 'Rain'){
      //     weatherIcon.src = "images\rain.png"
      // }
      // else if(user.weather[0].main == 'Snow'){
      //     weatherIcon.src = "images\snow.png"
      // }
      document.querySelector('.weather').style.display = 'block'
      document.querySelector('.error').style.display = 'none'
    })
    .catch((error) => {
      
    });
});
