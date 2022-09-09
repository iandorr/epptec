// Filter function

const fltr = (arr, condition) => {
  let result = [];
  for (let value of arr){
    condition(value) ? result.push(value) : '';
  }
  return result;
}

// Usage demonstration

const testarray = ['Peter', 'Rudolf', 'Clementine', 'Eve', 'Jack', 'Judith'];
const fiveOrShorter = (x) => x.length <= 5 ? true : false;

console.log(fltr(testarray, fiveOrShorter));

// Tested in browser Dev Tools