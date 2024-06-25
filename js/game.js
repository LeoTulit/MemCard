const grid = document.querySelector('.grid');
const characters =[
    'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopy',
];


const createElement= (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard ='';
let secondCard ='';

const checkEndGame= () =>{
    const disableCards = document.querySelectorAll('.disable-card');
    if(disableCards.length === 20){
        alert('Parabens, Voce conseguiu');
    }
}

const checkCards = () =>{
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');


    if( firstCharacter === secondCharacter){


              firstCard.firstChild.classList.add('disable-card');  
              secondCard.firstChild.classList.add('disable-card');

              firstCard ='';
              secondCard ='';

              checkEndGame();


    } else{

        setTimeout(() => {
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard ='';
        secondCard ='';
    }, 500);
    }



};
const revealcard = ({ target }) =>{

    if(target.parentNode.className.includes('revael-card')){
        return;
    }

if(firstCard === ''){

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
}else if( secondCard === ''){
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();
}


}

const creatCard = (character) =>{
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealcard);
    card.setAttribute('data-character', character);
    
    return card;
}

const loadGame =() =>{

    const duplicateCharacter = [ ... characters , ...characters ];

    const shufflerdArray = duplicateCharacter.sort( ( )=> Math.random() - 0.5);
    
    shufflerdArray.forEach((character)=>{
        const card = creatCard(character);
        grid.appendChild(card);

    });
}

loadGame();