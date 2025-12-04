console.log(a);
//hoistng
var a = 10;

/global scope / Function scope
console.log(a);

function test() 
//ES6 
// let ans const
//console.log(b); //ReferenceError
// temporal dead zone

let b = 20;
b=130;

//Block scope

console.log(b);

// { let b==30 // console.log(b); }

//console.log(c);

const c=40;
c=70;
consolre.log(c);

//Functions
//Functions  Declarations

namedFunc();
function namedFunc(){
    console.log("Named Function called");
        console.log("Named Function called");
            console.log("Named Function called");

}
nammedFunc();

//FuncExp() --------> This will create an error
//2.FunctionExpression
 
let funcExp=function(){
    console.log("Function Expression called");
};
funcExp();

//3. Arrow Function E
let arrow=()=>{
    console.log("Arrow Function called");
};
arrow();

//4 . Callback Function and 5.IIFE
(()=>{
    console.log("IIFE called");
})
();