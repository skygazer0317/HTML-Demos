function dataprovider(consumer){
let message='this is the message from data provider vada machi valaka baji'
setTimeout(()=>consumer(message),10000)
}

//asynchronous function
function consumer(data){
    alert(data)
    console.log(data)
}

dataprovider(consumer)
console.log('hello')
console.log('welcome')
console.log('today is ' + new Date())