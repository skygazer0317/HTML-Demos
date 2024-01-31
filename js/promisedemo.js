let promise= new Promise(function (resolve , reject){
    let randomNumber=Math.random();
    setTimeout(()=>{
        if(randomNumber<0.5){
            resolve(randomNumber)
        }else{
            reject(new Error('rejected'))
        }
    },7000)
})
myPromise
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})