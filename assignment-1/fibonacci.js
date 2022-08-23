function fibs(n) {
  const fibArr = []
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      fibArr.push(i);
    } else {
      fibArr.push(fibArr[i- 1] + fibArr[i - 2]);
    }
  }

  return fibArr;
}

console.log(fibs(8))

function fibsRec(n, result = [0]) {
  return (n === 1) ? result : fibsRec(n - 1, result.concat(result.length > 1 ? result[result.length - 1] + result[result.length - 2] : 1));
} 

console.log(fibsRec(8));