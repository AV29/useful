class Node {
  constructor (params) {
    this.items = [];
    Object.keys(params).forEach((key) => {
      this[key] = params[key];
    });
  }

  addItem (item) {
    this.items.push(item);
  }
}

export function generateTree (options = {}) {
  const { depth = 1, width = 1, isCollapsed = true } = options;

  function getNode (currDepth = 0, currWidth = 1) {
    let widthCounter = 1;
    const nodeContent = !currDepth ? 'Root' : `Level ${currDepth}, Node ${currWidth}`;
    const node = new Node({
      id: nodeContent,
      nodeContent,
      depth: currDepth,
      isCollapsed
    });
    while (widthCounter <= width) {
      if (currDepth >= depth) break;
      node.addItem(getNode(currDepth + 1, widthCounter));
      widthCounter += 1;
    }
    return node;
  }

  return getNode();
}

export function flattenTree (tree) {
  const accumulator = [];

  function readNode (data) {
    accumulator.push(data.id);
    data.items && data.items.length && data.items.forEach(readNode);
  }

  readNode(tree);
  return accumulator;
}

export function mapTree (tree, transformer) {
  let index = 0;

  function mapNode (data, width = 1, depth = 1) {
    index += 1;
    const node = transformer(data, { width, depth, index });
    if (data.items && data.items.length) {
      node.items = data.items.map((data, width) => mapNode(data, width + 1, depth + 1));
    }
    return node;
  }

  return mapNode(tree);
}
