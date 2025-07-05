function fibs(n) {
  let fibsArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
  }

  return fibsArray;
}

console.log(fibs(8));
