export function getRandomColor () {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomizedList = (quantity, lowerBound = 1, upperBound = 100) =>
  (new Array(quantity)).fill(0).map(() => getRandom(lowerBound, upperBound));
