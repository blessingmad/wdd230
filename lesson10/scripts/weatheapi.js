const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption"); 

const url = "https://api.openweathermap.org/data/2.5/weather?q=Soshanguve&units=metric&appid=ec98f94b11c44d888dd6bca93d566cd5";

function displayResults (weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

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

