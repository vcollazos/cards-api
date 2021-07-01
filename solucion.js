let id_deck;
let remaining_cards;

async function drawCard() {
    const buffer = await fetch(`https://deckofcardsapi.com/api/deck/${id_deck}/draw/?count=1`);

    const datos = await buffer.json();    
    console.log(datos)
    var newImage = document.createElement("img");
    newImage.src = datos.cards[0].image;
    document.querySelector('#cards').appendChild(newImage);
    remaining_cards = datos.remaining;
    document.querySelector('#remaining_cards').textContent = datos.remaining;
}

async function startGame() {
  
    const buffer = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');

    const datos = await buffer.json();
    console.log(datos)
    document.querySelector('#deck_id').textContent = datos.deck_id;
    id_deck= datos.deck_id;
    document.querySelector('#remaining_cards').textContent = datos.remaining;
    remaining_cards = datos.remaining;
    document.querySelector('#start').classList.add('d-none');
    setTimeout(()=> {
        document.querySelector('#draw').classList.remove('d-none');
        document.querySelector('#stop').classList.remove('d-none');
    }, 2000)


    document.querySelector('#draw').onclick = () => { drawCard();}
}

const startButton = document.querySelector('#start');
startButton.onclick = () => { startGame(); }