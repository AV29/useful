function deCapitalize (string) {
  return string
    .split('')
    .map((char, index) => {
      if (!index) {
        return char.toUpperCase();
      }
      if (char === char.toUpperCase()) {
        return ` ${char.toLowerCase()}`;
      } else {
        return char;
      }
    })
    .join('');
}

export default deCapitalize;
