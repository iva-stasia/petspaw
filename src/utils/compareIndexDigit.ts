const compareIndexDigit = (index: number, digit: number) => {
  const lastIndexDigit = Number(index.toString().slice(-1));
  return lastIndexDigit + 1 === digit;
};

export default compareIndexDigit;
