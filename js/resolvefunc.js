let promise= new Promise(function (resolve , reject){
 setTimeout(function () {
    resolve('promise resolved')}, 4000);
});

 async function asyncfunc(){

    let result= await promise;

    console.log(result)
    console.log('hello')

}

asyncfunc();