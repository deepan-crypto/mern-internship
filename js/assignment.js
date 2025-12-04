//Q1
function createArray(arg1, arg2, arg3) {
  return [arg1, arg2, arg3];
}

const resultQ1 = createArray(10, "hello", true);
console.log(resultQ1); 

//q2
function stringOnly(...args) {
  return args.filter(arg => typeof arg === 'string');
}


const resultQ2 = stringOnly(1, "apple", true, "banana", 42, "cherry");
console.log(resultQ2); 



//q3
function squareNumbers(...numbers) {
  return numbers.map(num => num * num);
}


const resultQ3 = squareNumbers(2, 3, 4);
console.log(resultQ3); 
