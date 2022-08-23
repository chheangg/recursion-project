const toBeSorted = [4, 8, 6, 2, 1, 7, 5, 3];
const oddSorted = [4, 8, 6, 2, 1, 7, 5]

function mergeSort(arr) {
  const l = arr.length;
  if (l === 1) {
    return arr
  }
  const newArr = [];

  const leftHalf = mergeSort(l % 2 === 0 ? arr.slice(0, l / 2) : arr.slice(0, (l - 1) / 2));
  const rightHalf = mergeSort(l % 2 === 0 ? arr.slice(l / 2) : arr.slice((l - 1) / 2));
  
  for (let i = 0; i < l; i++) {
    if (leftHalf[0] > rightHalf[0] || leftHalf.length === 0) {
      newArr.push(rightHalf.shift());
    } else {
      newArr.push(leftHalf.shift());
    }
  }

  return newArr;
}

console.log(mergeSort(toBeSorted))
console.log(mergeSort(oddSorted))