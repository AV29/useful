function classNames(array) {
  let result = '';
  return array.reduce((acc, classLiteral, index, arr) => {

    if (typeof classLiteral === 'string') {
      result = acc + classLiteral;
    } else if (typeof classLiteral === 'object') {
      const objectKey = Object.keys(classLiteral)[0];
      result = acc + (objectKey && classLiteral[objectKey] ? objectKey : '');
    } else {
      result = acc;
    }

    return result + (index !== arr.length - 1 ? ' ' : '');
  }, result);
}

export default classNames;
