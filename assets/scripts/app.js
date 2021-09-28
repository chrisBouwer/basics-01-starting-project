//add the calc logic

//alert('This works');

const defaultResult = 1;

let currentResult = defaultResult;

function add(num1, num2) {
  return num1 + num2;
}

alert('' + add(defaultResult, currentResult));

currentResult += 10;

//alert('Current Result:' + currentResult);

outputResult(currentResult, `default restult = ${defaultResult}`);

// template literal:  `${var}`

let errorMessage = 'An error \n n \t tab occurred!';

console.log(errorMessage);
