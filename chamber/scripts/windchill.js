const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption"); 
const windSpeed = document.querySelector("Wind-speed");
const windChill = document.querySelector("Wind-chill");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=ec98f94b11c44d888dd6bca93d566cd5";

function displayResults (weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(2)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    windSpeed.innerHTML = `<strong> ${weatherData.wind.speed.toFixed[1]}</strong>`

}



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);// this is for testing the call
            displayResults(data);

        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }

}
apiFetch();
