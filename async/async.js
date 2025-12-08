// setTimeout(()=>{
//     console.log("Set Timeout Function");
// },2000);

// //CAll back hell
// // nested callback

// setTimeout(()=>{
//     console.log("First Timeout");
//     setTimeout(()=>{
//         console.log("Second Timeout");
//         setTimeout(()=>{
//           //  return; to s=s make an error );
//         },2000);
//     },2000);
// },2000);    


//Promise
//3 states
//pending       
//fulfilled
//rejected

let mypromise=new Promise((res,rej)=>{
            let mark=60;
            if(marks >= 60){
                res("Student passed");
            }
            else{
                rej("Student failed");
            }

});

// ways to ca;ll promise
//.then()
// .catch()

 
// // promise pass a callback function
//  mypromise
//     .then((a)=>{
//     console.log(a);
//  })
//  .catch((err)=>{
//     console.log(err);
//  });

// // Aysnc and await 
// //  no error handling

// let handlePromise = async()=>{
//     try{
//         console.log("asdf");
//         let  response = await mypromise;
//         console.log(response);
//         console.log("anything");

//     }catch(err){
//         console.log(err);
//     }finally{
//         console.log("Execution completed");
//     }
// }

// handlePromise();

// // fetch API
// // to make network request
// // to get data from server
// // to send data to server

// // 1. using then and catch

let fetchData=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res);
        return res.json();
})
    .then((data)=>{
        console.log("value is",data);
    })
    .catch((err)=>{
        console.log(err);
    });
}
