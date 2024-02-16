const apiKey = "1270909c4c54ea76db511a73d993edfe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q=";

const searchBox = document.querySelector('.serachBar');
const searchButton = document.querySelector('.serachBack');
const weatherMood = document.querySelector('.weatherMood');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); 

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".allData").style.display = "none";
    }else{
        document.querySelector(".error").style.display = "none";
        var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.cel').innerHTML = Math.round((data.main.temp) - 273.15) + "°C";
    document.querySelector('.precentage').innerHTML = data.main.humidity + "%";
    document.querySelector('.speed').innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherMood.src = "images/clouds 2.svg";
    }else if(data.weather[0].main == "Clear"){
        weatherMood.src = "images/clear-day.svg";
    }else if(data.weather[0].main == "Rain"){
        weatherMood.src = "images/rain.svg";
    }else if(data.weather[0].main == "Drizzle"){
        weatherMood.src = "images/drizzle.svg";
    }else if(data.weather[0].main == "Mist"){
        weatherMood.src = "images/mist.svg";
    }
    document.querySelector(".allData").style.display = "block";
    }

}
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
