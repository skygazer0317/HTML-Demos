// example for reference type
// array
let arr1=[10,20,30,40,50]
let arr2=arr1
arr2.push(60)
console.log(arr1)
console.log(arr2)
arr1.push(80)
console.log(arr1)
console.log(arr2)

//object
let obj1={"name":"john","age":20}
let obj2=obj1;
console.log(obj1)
console.log(obj2)
obj2.name="jack"
console.log(obj1)
console.log(obj2)
//example for value type /primitive type
let a=10;
let b=a;
console.log(a)
console.log(b)
b=20;   
console.log(a)
console.log(b)

//string 
let str1="hello"
let str2=str1
str1="new text"
console.log(str1)
console.log(str2)

