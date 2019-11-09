function generateTree (options = {}) {
  const { depth = 1, width = 1 } = options;

  function getGeneration (currDepth = 0, currWidth = 1) {
    let widthCounter = 1;
    let res = {
      id: !currDepth ? 'Root' : `Level ${currDepth} - ${currWidth}`,
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

export function traverseTree (tree) {
  const accumulator = [];

  function readGeneration (data) {
    if (data.items.length) {
      for (let i = 0; i < data.items.length; i++) {
        accumulator.push(data.items[i].id.replace('Level ', ''));
        readGeneration(data.items[i]);
      }
    }
  }

  readGeneration(tree);
  return accumulator;
}

export default generateTree;
