const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const humidity = document.querySelector("#humidity");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&appid=ec98f94b11c44d888dd6bca93d566cd5";

function displayResults(weatherInfo) {
    currentTemp.innerHTML = `<strong>${weatherInfo.main.temp.toFixed(0)}</strong`;
    humidity.innerHTML = `<strong>${weatherInfo.main.humidity.toFixed(0)}</strong`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;

    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;

}


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

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
