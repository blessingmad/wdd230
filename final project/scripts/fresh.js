const fruitUrl = "https://blessingmad.github.io/wdd230/final/scripts/data.json"
function populateSelectElement(selectId, options) {
    const select = document.getElementById(selectId);

    for (const option of fruits) {
        const optionElement = document.createElement('option');
        optionElement.value = option.fruit;
        optionElement.textContent = option.fruit;
        select.appendChild(optionElement);
    }
}
fetch(fruitUrl)
.then(response => response.json())
.then(data => { 
    const fruits = data.fruits;

//fetch(fruitUrl)
//.then (function(response) {
   // return response.json();

//})
//.then(function(jsonData) {
    //const fruits = jsonData["fruits"];
//})

    populateSelectElement('fruits1', fruits);
    populateSelectElement('fruits2', fruits);
    populateSelectElement('fruits3', fruits);

});
document.getElementById('drink-form').addEventListener('submit', function(event) {
    event.preventDefault();


    const firstName = document.getElementById('first-name').value;
    const email =  document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 =  document.getElementById('fruit1').name;
    const fruit2 = document.getElementById('fruit2').name;
    const fruit3 =  document.getElementById('fruit3').name;
    const instructins = document.getElementById('special-instructions').value;
    
    const orderOutput = document.getElementById('order-output');
   orderOutput.innerHTML = `
   <h2>Your Order Details:</h2>
   <p><strong>First Name:</strong> ${firstName}</p>
   <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong> Fruit 1:</strong> ${fruit1}</p>
    <p><strong>Fruit 2:</strong> ${fruit2}</p>
    <p><strong>Fruit 3:</strong> ${fruit3}</p>
    <p><strong>Spcisl Instructions:</strong> ${instructions}</p>
    <p><strong>Order Date:</strong> ${new Date}</p>





   `

})
