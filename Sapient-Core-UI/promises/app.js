let promise1 = new Promise((resolve,reject)=>{
    if(true){
        resolve('Promise1');
    }
    else{
        reject('I am error of Promise1');
    }
});
let promise2 = new Promise((resolve,reject)=>{
   
    if(true){
        resolve('Promise2');
    }
    else{
        reject('I am error of Promise2');
    }
});

Promise.all([promise1, promise2])
.then((data)=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})
// promise.then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })

console.log('I am first')