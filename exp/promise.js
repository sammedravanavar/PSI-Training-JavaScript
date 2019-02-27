let promise = new Promise((resolve,reject)=>{
    console.log('I am second')
    if(1){
        // console.log('I am third')
        resolve(function(){
            console.log('I a m third')
            return "resolved"
        })
        // resolve('resolved')
    }
    else{
        reject('I am rejected')
    }
})
// let promise2 = new Promise((resolve,reject)=>{
//     if(0){
//         resolve('1')
//     }
//     else{
//         // throw 'error'
//         reject('2')
//     }
// })

promise.then(data=>{
    console.log(data())
}).catch(err=>{
    console.log(err)
})

// Promise.all
console.log('I am first')

// Promise.all([promise, promise2])
// .then((data)=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })


// promise.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })
// .then(promise2.then(data=>{
//     console.log(data)
// })).catch(err=>{
//     console.log(err)
// })