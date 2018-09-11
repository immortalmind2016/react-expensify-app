
console.log("utils.js i running")
const square=(x)=>x*x
const add=(a,b) => a+b

/*

export{  // 1st way called named export
 square,
 add

}*/

const subtract=(a,b)=> a-b;
// 2nd way as default export
export{  
 square,
 add ,
 subtract as default

}
/*
export default (a,b) => a*b
//exports - default export - named exports */