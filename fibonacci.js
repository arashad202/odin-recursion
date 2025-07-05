function fibs(n) {
  let fibsArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
  }

  return fibsArray;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n <= 0) return [0];
  if (n === 2) return [0, 1];

  const arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

console.log(fibsRec(8));
