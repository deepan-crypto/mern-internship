
// //Tag Selector
// let heading1=document.getElementsByTagName("h1");
// //HTML Collection Array

// console.log(heading[1]);

// // Class Selector
// let cl=document.getElementsByClassName("a");
// //Html Collection Array
// console.log(cl[0]);

// //ID Selector
// let id=document.getElementById("b");
// //it will return single element and the first element

// console.log(id);

// //Query Selector(it works on all the three selectors)
// let sel=document.querySelector("#a");
// // it will return first element annd  single element

// console.log(query);



// //Query Selector All(it works on all the three selectors)
// let d=document.querySelectorAll(".a");
// //it will return all the elements and it will return NodeList Array

// console.log(d);


/// Read and Write in DOM

// let head=document.querySelector("p");

// //Read operation
// console.log(head.textContent);

// //Wrtite operation
// head.textContent="This is a new paragraph";

// let div=document.querySelector("div");
// div.innerHTML="<p>Hello From para</p>";

// console.log(div.innerHTML);
// console.log(div.textContent);



// add / remove // toggle

let head=document.querySelector("h1");

console.log(head);

head.classList.add("color");
    head.classList.remove("borer");
    head.classList.toggle("background");


    //Styling 

  let p =document.querySelector("p");
  
  p.style.color="blue";
  p.style.backgroundColor="green";
  p.style.fontSize="30px";  


  //Create Element

  let ul=document.createElement("ul");
  let lii=document.createElement("li");

lii.textContent="Item 1";
lii.textContent="Item 2";

ul.appendChild(lii);

document.body.appendChild(ul);

 let arr=["Apple","Banana","Mango"];
 arr.forEach((elemnt)=>{
    let lo=document.createElement("li");
    lo.textContent=elemnt;
    ul.appendChild(lo);
 });