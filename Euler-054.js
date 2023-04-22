const fs = require('fs');

function countP1Wins() {
  const hands = fs.readFileSync('poker.txt', 'utf8').trim().split('\n').map(line => line.trim().split(' '));

  const values = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14};
  const straights = [[14, 5, 4, 3, 2], [13, 12, 11, 10, 9], [12, 11, 10, 9, 8], [11, 10, 9, 8, 7], [10, 9, 8, 7, 6], [9, 8, 7, 6, 5], [8, 7, 6, 5, 4], [7, 6, 5, 4, 3], [6, 5, 4, 3, 2]];
  const ranks = [[1, 1, 1, 1, 1], [2, 1, 1, 1], [2, 2, 1], [3, 1, 1], [3, 2], [4, 1]];

  function calculateRank(hand) {
    const cardValues = hand.map(card => values[card[0]]);
    const valueCount = {};
    for (const cardValue of cardValues) {
      valueCount[cardValue] = (valueCount[cardValue] || 0) + 1;
    }
    const sortedValues = cardValues.sort((a, b) => b - a);
    const rankIndex = ranks.findIndex(rank => rank.every(count => sortedValues.slice(0, count).filter(v => v === sortedValues[0]).length === count));
    const score = [rankIndex, ...sortedValues];
    if (hand.every(card => card[1] === hand[0][1])) {
      score[0] = 5; // flush
    }
    if (straights.some(straight => straight.every(value => sortedValues.includes(value)))) {
      score[0] = 4; // straight
    }
    return score;
  }

  const p1Wins = hands.filter(hand => calculateRank(hand.slice(0, 5)).join('').localeCompare(calculateRank(hand.slice(5)).join('')) > 0).length;

  return p1Wins;
}

console.log(countP1Wins()); // should output 376
