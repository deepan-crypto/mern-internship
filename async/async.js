setTimeout(()=>{
    console.log("Set Timeout Function");
},2000);

//CAll back hell
// nested callback

setTimeout(()=>{
    console.log("First Timeout");
    setTimeout(()=>{
        console.log("Second Timeout");
        setTimeout(()=>{
          //  return; to s=s make an error );
        },2000);
    },2000);
},2000);    


