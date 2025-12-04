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

const add=(parameter1,parameter2)=>{
    console.log(parameter1,parameter2);
    let num1=parameter1 || 10;
    let num2=parameter2 || 20;
    let sum= num1+num2;

    console.log("Sum is:",sum);

};
add(10,20);
add(40,50);
add();

