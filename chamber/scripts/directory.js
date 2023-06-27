const url = "https://blessingmad.github.io/wdd230/chamber/scripts/data.json"

fetch(url) 
    .then (function(responses) {
        return responses.json();
    })
    .then(function(jsonData) {
        const contacts = jsonData["contacts"];
        const cards = document.querySelector("div.cards");

        contacts.forEach((contact) => {
        let card = document.createElement('section');
        let h2 =document.createElement('h2');
        let name1 = document.createElement('h2');
        let address = document.createElement('p')
        let phone = document.createElement('p')
        let iconurl = document.createElement('img');
        let homeurl = document.createElement('a');



        h2.textContent = `${contact.name1} `;

        name1.textContent = `Company Name: ${contact.name1}`;
        address.textContent = `Company Address: ${contact.address}`;
        name1.textContent = `Company Contact: ${contact.phone}`;
        iconurl.textContent = `Logo URL: ${contact.iconurl}`;
        homeurl.textContent = contact.homeurl
        homeurl.href = contact.homeurl
        iconurl.setAttribute('src', contacts.iconurl);
        iconurl.setAttribute('loadng', 'lazy');
       // append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(name1);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(iconurl);
        card.appendChild(homeurl); 
        
        
    
        cards.appendChild(card)
    });
});

const gridbutton = document.querySelector('.grid');
const listgrid = document.querySelector('.list');
const show = document.querySelector('div.cards');

gridbutton.addEventListener('click', () => {
    show.classList.add('cards');
    show.classList.remove('list');
});
function displayList () {
    show.classList.add('list');
    show.classList.remove('grid');
}


