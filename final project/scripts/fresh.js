const fruitUrl = "https://blessingmad.github.io/wdd230/final/scripts/data.json"
function getElements(selectId, options) {
    const select = document.getElementById(selectId);

    for (const option of fruits) {
        const optionElement = document.createElement('option');
        optionElement.value = option.fruit;
        optionElement.textContent = option.fruit;
        select.appendChild(optionElement);
    }
}
//fetch(fruitUrl)
//.then(response => response.json())
//.then(data => { 
   // const fruits = data.fruits;

fetch(fruitUrl)
.then (function(response) {
    return response.json();

})
.then(function(jsonData) {
    const fruits = jsonData["fruits"];
})

    getElements('fruits1', fruits);
    getElements('fruits2', fruits);
    getElements('fruits3', fruits);

//});
document.getElementById('drink-form').addEventListener('submit', function(event) {
    event.preventDefault();


    const firstName = document.getElementById('first-name').value;
    const email =  document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 =  document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 =  document.getElementById('fruit3').value;
    const instructins = document.getElementById('special-instructions').value;
  
})
