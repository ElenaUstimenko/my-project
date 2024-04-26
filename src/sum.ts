const sum = (num1: number | null, num2: number): number | string => {
  if (num1 !== null) {
    return num1 + num2
  }
  return 'wrong argument'
};

export default sum;