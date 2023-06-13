const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
}
getProphetData();

//define a function 
const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 =document.createElement('h2');
        let portait = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`

        portait.setAttribute('src', prophet.imageurl);
        portait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);

        cards.appendChild(card)
    })
}