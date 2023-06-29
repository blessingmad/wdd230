const currentDate = Date();
document.querySelector("#lastModified").innerHTML = currentDate;

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});
// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("time");


// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);


datefield.textContent = fulldate;

//................ discovery...........

const visitCountsElement = document.getElementById('visit-count');
let visitCount = localStorage.getItem('visitCount');

if (!visitCount) {
    visitCount = 0;

}
visitCount++;
localStorage.setItem('visitCount', visitCount);

visitCountsElement.textContent = `You have ${visitCount} visits ${visitCount ===1 ? '' : ''}.`;

const today = new Date();
const day = today.getDay();

if (day === 1 || day === 2) {
	const bannerElement = document.getElementById('banner');
	bannerElement.innerHtml = 'Come join us for the chamber meet and greeet at 7:00p.m '
};







