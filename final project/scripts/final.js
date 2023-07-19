const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption"); 
const humidity= document.querySelector("#humidity");
const windChill = document.querySelector("#wind-chill");
const foreCast = document.querySelector("#forecast");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=ec98f94b11c44d888dd6bca93d566cd5";

function displayResults (weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(2)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    humidity.innerHTML = `<strong> ${weatherData.main.humidity.toFixed(1)}</strong>`
    windChill.innerHTML = `<strong> ${weatherData.main.feels_like.toFixed(1)}</strong>`
    foreCast.innerHTML = `<strong> ${weatherData.wind.speed.toFixed(1)}</strong>`

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

const currentDate = Date();
document.querySelector("#lastModified").innerHTML = currentDate;

const btn = document.querySelector("#btn");
const navigation = document.querySelector(".navigation");

btn.addEventListener("click", () => {
    navigation.classList.toggle("responsive");
});

const dateField = document.querySelector("time");

const today = new Date();

const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(today);

dateField .textContent = fullDate;