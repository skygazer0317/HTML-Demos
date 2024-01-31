function Counter(){
    let count=0;
  increment:function increment(){
    return ++count;
  }
  decrement:function decrement(){
    return --count;
  }
  getCount:function getCount(){
    return count;
  }
  return {increment,decrement,getCount}
} 
let countfunc=Counter();
let countfunc1=Counter();
console.log(countfunc.increment())
console.log(countfunc.increment())
console.log(countfunc.increment())
console.log(countfunc.decrement())
console.log(countfunc.getCount())
console.log(countfunc1.increment())
console.log(countfunc1.getCount())

function outer(){
    let outerVar='This is outervariable'
    console.log(this.outerVar)
    console.log(outerVar)
    function inner(){
        console.log(this.outerVar)
        console.log(outerVar)
    let innerVar='This is inner variable'
    console.log(this.innerVar)
    console.log(innerVar)
}
console.log(innerVar)
return inner; 
}
