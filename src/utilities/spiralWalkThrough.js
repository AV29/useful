import { getRandomizedList } from './random';

export function generateMatrix (x, y, range = { from: 0, to: 1 }) {
  const result = [];
  for (let i = 0; i < x; i += 1) result.push(getRandomizedList(y, range.from, range.to));
  return result;
}

export function getSpiralLoop (array) {
  let right, down, left, up;
  let depth = 0;
  let counter = 0;

  const result = [];

  const isEnough = (x, y) => {
    result.push({ x, y, element: array[x][y] });
    counter += 1;
    return counter === array.length * array[0].length;
  };

  while (true) { /* eslint-disable-line */

    right = depth;
    while (right < array[0].length - depth) {
      if (isEnough(depth, right)) return result;
      right += 1;
    }

    down = depth + 1;
    while (down < array.length - depth) {
      if (isEnough(down, array[0].length - depth - 1)) return result;
      down += 1;
    }

    depth += 1;

    left = array[0].length - depth;
    while (left > depth) {
      if (isEnough(array.length - depth, left - 1)) return result;
      left -= 1;
    }

    up = array.length - depth;
    while (up > depth - 1) {
      if (isEnough(up, depth - 1)) return result;
      up -= 1;
    }
  }
}

export function getSpiralRecursive (array, result = []) {

  if (!array.length) return result;

  result = result.concat(array.shift());

  array.forEach(row => result.push(row.pop()));

  result = result.concat(array.pop().reverse());

  for (let i = array.length - 1; i >= 0; i -= 1) result.push(array[i].shift());

  return getSpiralRecursive(array, result);
}
