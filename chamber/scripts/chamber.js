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









