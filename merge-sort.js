function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const merge = (left, right) => {
    const result = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(i));
  };

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
