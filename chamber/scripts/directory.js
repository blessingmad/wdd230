const url = "https://blessingmad.github.io/wdd230/chamber/scripts/data.json"

fetch(url) 
    .then (function(responses) {
        return responses.json();
    })
    .then(function(jsonData) {
        const contacts = jsonData["contacts"];
        const cards = document.querySelector("div.cards");

        prophets.forEach((contact) => {
        let card = document.createElement('section');
        let h2 =document.createElement('h2');
        //let dateOfBirth = document.createElement('p');
        //let placeOfBirth = document.createElement('p');

        //let portrait = document.createElement('img');

        h2.textContent = `${contact.name} ${contact.iconurl}`;
        
        card.setAttribute('src', contacts.card);
        //portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // append the section(card) with the created elements
        card.appendChild(h2);  
        card.appendChild(iconurl);
        card.appendChild(card);
    
        cards.appendChild(card)
    });
});
