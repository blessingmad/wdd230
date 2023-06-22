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
        //let h2 =document.createElement('h2');
        let name1 = document.querySelector('h2');
        let iconurl = document.createElement('img');
        let homeurl = document.createElement('p');



        //h2.textContent = `${contact.name1} `;

        name1.textContent = `Company Name: ${contact.name1}`;
        iconurl.textContent = `Logo: ${contact.iconurl}`;
        homeurl = textContent = `Home Page: ${contact.homeurl}`
        card.setAttribute('src', contacts.card);
       // append the section(card) with the created elements
        //card.appendChild(h2);
        card.appendChild(name1);
        card.appendChild(homeurl); 
        card.appendChild(iconurl);
        
    
        cards.appendChild(card)
    });
});
