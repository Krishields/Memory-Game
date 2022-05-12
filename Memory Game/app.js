const cardArray = [
    {
        name: 'Bowser',
        img: 'Images/Bowser.png',
    },
    {
        name: 'Luigi',
        img: 'Images/Luigi.png',
    },
    {
        name: 'Mario',
        img: 'Images/Mario.png',
    },
    {
        name: 'Peach',
        img: 'Images/Peach.png',
    },
    {
        name: 'Toad',
        img: 'Images/Toad.png',
    },
    {
        name: 'Yoshi',
        img: 'Images/Yoshi.png',
    },
    {
        name: 'Bowser',
        img: 'Images/Bowser.png',
    },
    {
        name: 'Luigi',
        img: 'Images/Luigi.png',
    },
    {
        name: 'Mario',
        img: 'Images/Mario.png',
    },
    {
        name: 'Peach',
        img: 'Images/Peach.png',
    },
    {
        name: 'Toad',
        img: 'Images/Toad.png',
    },
    {
        name: 'Yoshi',
        img: 'Images/Yoshi.png',
    },

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < 12; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/Question Block.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for a match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/Question Block.png')
        cards[optionTwoId].setAttribute('src', 'images/Question Block.png')
        alert('You Have Clicked the Same Image!')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You Found a Match!')
        cards[optionOneId].setAttribute('src', 'images/White.png')
        cards[optionTwoId].setAttribute('src', 'images/White.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/Question Block.png')
        cards[optionTwoId].setAttribute('src', 'images/Question Block.png')
        alert('Sorry Try Again')
    
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
       resultDisplay.textContent = 'Congtratulations You Found Them All'
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
 
}






