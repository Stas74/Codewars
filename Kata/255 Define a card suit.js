// Define a card suit

/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
  if (card.slice(-1) === '♠') return 'spades'
  if (card.slice(-1) === '♦') return 'diamonds'
  if (card.slice(-1) === '♥') return 'hearts'
  if (card.slice(-1) === '♣') return 'clubs'
}


console.log(defineSuit('Q♠'))  // 'spades'
console.log(defineSuit('J♥'))  // 'hearts'



function defineSuit(card) {
    return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
}


function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}


