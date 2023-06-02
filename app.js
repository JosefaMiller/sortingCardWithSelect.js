
const value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']

const symbol = [
  { simbolo: '♥', color: 'red' },
  { simbolo: '♦️', color: 'red' },
  { simbolo: '♠', color: 'black' },
  { simbolo: '♣', color: 'black' },
];

const containerElement = document.querySelector('#container');
const buttonElement = document.getElementById('buttonElement');

let originalCards = [];

function createCard(symbol, value) {
  const cardElement = document.createElement('container');
  cardElement.classList.add('row', 'card');

  const randomValue = value[Math.floor(Math.random() * value.length)];
  const randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];

  const topElement = document.createElement('container');
  topElement.classList.add('col', 'top');
  topElement.textContent = randomSymbol.simbolo;
  topElement.style.color = randomSymbol.color;

  const centerElement = document.createElement('container');
  centerElement.classList.add('col', 'center');
  centerElement.textContent = randomValue;

  const bottomElement = document.createElement('container');
  bottomElement.classList.add('col', 'bottom');
  bottomElement.textContent = randomSymbol.simbolo;
  bottomElement.style.color = randomSymbol.color;

  cardElement.appendChild(topElement);
  cardElement.appendChild(centerElement);
  cardElement.appendChild(bottomElement);

  return cardElement;
};

const textArea = document.getElementById('cantidad');
const button = document.createElement('button');
button.textContent = 'Enviar resultados';
document.body.appendChild(button);

let cardElement;
let generateCards = [];
let record = [];
button.addEventListener('click', function () {
  const amount = parseInt(textarea.value);

  for (let i = 0; i < amount; i++) {
    cardElement = createCard(symbol, value);
    generateCards.push(cardElement);
    originalCards.push(cardElement.cloneNode(true));
  }

  containerElement.innerHTML = '';

  generateCards.forEach(function (card) {
    containerElement.appendChild(card);
  });

  record.forEach(function (card) {
    containerElement.appendChild(card.cloneNode(true));
  });
});

const sortBut = document.getElementById('sortBut');
sortBut.addEventListener('click', function() {
  for (let i = 0; i < generateCards.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < generateCards.length; j++) {
      const currentCard = generateCards[minIndex];
      const findOutCard = generateCards [j];
      const currentValue = currentCard.querySelector('.center').textContent;
      const findOutValue = findOutCard.querySelector('.center').textContent;
      if (valores.indexOf(currentValue) > valores.indexOf(findOutValue)) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let temp = generateCards[i];
      generateCards[i] = generateCards[minIndex];
      generateCards[minIndex] = temp;

      setTimeout(() => {
        containerElement.innerHTML = '';
        generateCards.forEach(function(card) {
          containerElement.appendChild(card);
        });
      }, 100);
    }
  }

  containerElement.innerHTML = '';
  generateCards.forEach(function(card) {
    containerElement.appendChild(card);
  });

  const originalContainer = document.createElement('div');
  originalContainer.classList.add('container');
  originalCards.forEach(function(card) {
    originalContainer.appendChild(card);
  });
  document.body.appendChild(originalContainer);
});
