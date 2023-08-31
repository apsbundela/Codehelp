// --------------------- synch code-----------

// function syncFun(){
//     console.log("first ");
// }

// syncFun();
// console.log("second");

//--------------------- async code------------

// setTimeout(function(){
//     console.log("Third")
// },3000)  // this is async code 

// function syncFun(){
//     console.log("first ");
// }
// syncFun();
// console.log("second");


//---------------- Promise --------------
// JS koi process parllally background mn chalna chahte hai tab Promise ka use krte hain

// let meraPromise = new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log("I am inside Promise");
// },8000);
// resolve(true);
// })

// console.log("Pehla")


// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside Promise");
//     },8000);
//     // resolve(true);
//     reject(new Error("Promise not resolved"));
//     })
    
//    meraPromise.then(()=>{console.log("promise resolved")})
//    meraPromise.catch(()=>{console.log("Receieved an error")})



// let wadaaa1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('set timeout 1 started...');
//     },2000);
//     resolve(true);
// })

// let output = wadaaa1.then(()=>{
//     let wadaaa2 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('set timeout 2 started...')
//         },3000)
//         resolve("wadaa2 resolved")
//     })
//     return wadaaa2;
// })

// output.then((value)=>{console.log(value)})

// jha 50 promise hai jo ek dusre pr depend kr rhe toh kya hum then then lgate baithenge ?
// yha conscept aata hai async - await ka


// async function abcd (){
//     return 7;    
// }

// async function utility(){

//     let delhiMausam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi has hot weather");
//         },1000);
//     });

//     let hydMausam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hyderabad is Cool");
//         },6000);
//     });

//     // let dM =  delhiMausam;
//     // let hM =  hydMausam;

    
//     let dM =  await delhiMausam;
//     let hM =   hydMausam;

//     return [dM,hM];
// }

// get call using fetch api

// async function utility() {
// let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// let output = await content.json();
// console.log(output);
// }

//post call using fetch api


async function helper() {
let option = {
    method : 'POST',
    body: JSON.stringify({
        title : 'ayush',
        body : 'tagdi body',
        userId: 2,
        age : 22,
    }),
    headers:{
        'Content-type':'application/json; charset=UTF-8',
    },
};

let content = await fetch('https://jsonplaceholder.typicode.com/posts',option);
let response =  content.json();
return response;
}

async function utility(){
    let ans = await helper();
    console.log(ans);
}

utility();