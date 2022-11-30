function factorialize(num) {
  let sum = 0;
  if (num <= 0) return 1;
  else {
    sum = factorialize(num - 1) * num;
  }
  return sum;
}

console.log(factorialize(5));
