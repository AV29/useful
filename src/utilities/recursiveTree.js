export function generateTree (options = {}) {
  const { depth = 1, width = 1 } = options;

  function getGeneration (currDepth = 0, currWidth = 1) {
    let widthCounter = 1;
    let res = {
      id: !currDepth ? 'Root' : `Level ${currDepth}, Node ${currWidth}`,
      isCollapsed: true,
      items: []
    };
    while (widthCounter <= width) {
      if (currDepth >= depth) break;
      res.items.push(getGeneration(currDepth + 1, widthCounter));
      widthCounter += 1;
    }
    return res;
  }

  return getGeneration();
}

export function flattenTree (tree) {
  const accumulator = [];

  function readGeneration (data) {
    accumulator.push(data.id);
    data.items && data.items.length && data.items.forEach(readGeneration)
  }

  readGeneration(tree);
  return accumulator;
}

export function mapTree (tree, transformer) {
  function mapLevel (data) {
    const level = transformer(data);
    if (data.items && data.items.length) {
      level.items = data.items.map(mapLevel);
    }
    return level;
  }

  return mapLevel(tree);
}
