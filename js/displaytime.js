function getTime(){
    let time=new Date().toLocaleTimeString();
    console.log(time)
    document.getElementById('time').innerHTML=time

}
getTime()
//()=>getTime()-arrow function
setInterval(function(){getTime()},1000)
//setInterval is predfined - setInterval(handlerfunction,timeout)