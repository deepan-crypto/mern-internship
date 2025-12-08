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
            console.log("Third Timeout");
        },2000);
    },2000);
},2000);    
