const ucFirst = (string) => {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1);
};

export default ucFirst;
