function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


const date = new Date();
const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
const formattedDate = date.toLocaleDateString("en-US", options);

document.getElementById("datetime").innerHTML = formattedDate;


const year = new Date();
document.querySelector("#year").innerHTML = year;

