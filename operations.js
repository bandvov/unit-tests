// 182
function findData(args) {
  let i;
  let summ = 0;
  const numbers = [];
  for (i = 0; i < args.length; i++) {
    if (args[i] % 5 === 0 && args[i] % 7 !== 0) {
      summ += args[i];
      numbers.push(args[i]);
    }
  }

  return {
    summ,
    quantity: numbers.length
  };
}

// 323
function findPrime(n) {
  const result = [];
  const isPrime = n => {
    if (n === 2) {
      return true;
    }
    if (!Number.isInteger(n) || n < 2 || !(n % 2)) {
      return false;
    }
    for (let i = 3; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

// 560

function findRange(x, y) {
  const findDeviders = n => {
    if (typeof n !== "number" || n === "") {
      throw new Error("argument must be an integer");
    }
    let dividers = [];
    for (let i = 0; i < n; i++) {
      if (n % i === 0) {
        dividers.push(i);
      }
    }
    return dividers;
  };

  let obj = {};
  let sumObj = {};
  let resultObj = {};

  for (let i = x; i <= y; i++) {
    obj[i] = findDeviders(i);
  }
  for (let key in obj) {
    sumObj[key] = obj[key].reduce((sum, elem) => sum + elem);
  }
  let tempObj = { ...sumObj };
  for (let key in sumObj) {
    for (let item in tempObj)
      if (key == tempObj[item] && sumObj[key] == item) {
        resultObj[key] = item;
      }
  }

  return resultObj;
}
// validateData works not correct
const validateData = (args) => {
  if (!typeof (args) === 'array' && !args.every(isNaN)) {
    return true;
  } else {
    return false;
  }
};

const validatePrime = (n) => {
  if (isNaN(n) || n === '') {
    return false;
  }
  else {
    return true;
  }
}

const validateRange = (x, y) => {
  if (x === parseInt(x) && x === parseInt(y) || typeof (x) === 'number' && typeof (y) === 'number') {
    return true;
  } else {
    return false;
  }
}


module.exports = { findData, findRange, findPrime, validateData, validatePrime, validateRange };
