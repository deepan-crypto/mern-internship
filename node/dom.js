
console.log(this);
var funf=function(aa,jk){
    console.log(this.name,aa,jk);

}
// funf 300

// call apply blind

let boundedfn=funf.bind(Obj,500,"kl");
bounndedfn();

// return  a new function 
// call

funf.call(obj,400,900);

// apply
funf.apply(obj,[600,800]);

