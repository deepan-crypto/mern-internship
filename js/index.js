// console.log(a);
// //hoistng
// var a = 10;

// //global scope // Function scope
// console.log(a);

// //ES6 
// // let ans const
// //console.log(b); //ReferenceError
// // temporal dead zone

// let b = 20;
// b=130;

// //Block scope

// console.log(b);

// // { let b==30 // console.log(b); }

// //console.log(c);

// const c=40;
// c=70;
// consolre.log(c);

// //Functions
// //Functions  Declarations

// namedFunc();
// function namedFunc(){
//     console.log("Named Function called");
//         console.log("Named Function called");
//             console.log("Named Function called");

// }
// nammedFunc();

// //FuncExp() --------> This will create an error
// //2.FunctionExpression
 
// let funcExp=function(){
//     console.log("Function Expression called");
// };
// funcExp();

// //3. Arrow Function E
// let arrow=()=>{
//     console.log("Arrow Function called");
// };
// arrow();

// //4 . Callback Function and 5.IIFE
// (()=>{
//     console.log("IIFE called");
// })
// ();


//Function to add Two Numbers

// const add=(parameter1,parameter2)=>{
//     console.log(parameter1,parameter2);
//     let num1=parameter1 || 10;
//     let num2=parameter2 || 20;
//     let sum= num1+num2;

//     console.log("Sum is:",sum);
//     // the sum of parameter1 value is value and the parameter2 value is value

// };
// add(10,20);
// add(40,50);
// add();




// //Functions

// let a="10";
// let b=2;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);


// //arrays

// console.log(2=="2");
// let c=[10,20,30,40,50,"ass"];

// let d=[10,20,30,40,50,"ass"];

// console.log(c==d);
// console.log(c[0]===d[0]);   

// let arr=[1,2,3,4,5,6];




// //For loop 
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]+i;
// }
// console.log(arr);

// let arr1=[1,2,3,4,5,6];

// //For Each Loop 

// arr1.forEach((value,index)=>{
//     console.log(value,index);
// }
// );

// //Map Function
// let arr2=[1,2,3,4,5,6];
// // let aa=arr.map((value,index)=>{
// //     return value+index;
// // });

// let aa=arr.map((value,index)=>value+index);
// console.log(aa);
// console.log(arr2);





// //q5
// function collectNames(...names) {
//   return names.map(name => name.toUpperCase());
// }

// const resultQ5 = collectNames("sid", "raj", "anna");
// console.log(resultQ5); 

// //q6
// function makeUser(name, age, city) {
//   // Returns an array containing a single object
//   return [{
//     name: name,
//     age: age,
//     city: city
//   }];
// }

// const resultQ6 = makeUser("Sid", 22, "Delhi");
// console.log(resultQ6); 


// //q7
// function addTen(...args) {
//   return args
//     .filter(arg => typeof arg === 'number') 
//     .map(num => num + 10);                   
// }

// const resultQ7 = addTen(1, "a", 5, true, 10);
// console.log(resultQ7); 


// //q8
// function createFruitArray(...fruits) {
//   if (fruits.length === 0) {
//     return ["apple", "banana"];
//   } else {
//     return fruits;
//   }
// }

// const resultQ8a = createFruitArray();
// console.log(resultQ8a); 

// const resultQ8b = createFruitArray("grape", "orange", "kiwi");
// console.log(resultQ8b); 


//Filter
let a=[1,2,3,4,5,6,7,8,9,10];

let b=a.filter((el,index)=>{
    return index>4;
});

console.log(b);


let c=a.reduce((acc,el,index)=>{
    console.log(acc,el,index);

    return acc+el;
},200);

console.log(c);

