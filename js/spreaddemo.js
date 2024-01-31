let arr1=[10,20,30,40,55]
let arr2=[...arr1]
let arr3=arr1
console.log(arr1)
console.log(arr2)
console.log(arr3)
arr2.push(100)
arr3.push(300)
arr1.push(200)
console.log(arr1)
console.log(arr2)
console.log(arr3)

let names=["john","james","smith"]
let new_names=[...names,"joe","clara","jim"]
console.log(names)
console.log(new_names);

let obj1={"prop1":"value1","prop2":"value2"}
let obj2={"prop3":"value3","prop4":"value4"}

let obj3={...obj1,...obj2}
console.log(obj1)
console.log(obj2)
console.log(obj3)

let str="hello"
let str1=[...str]
console.log(str1)

//removing properties
let product={
    "name":"product name",
    "price":"some decription",
    "description":"some description",
    "category":"some category",
    "dom":"12-10-22",
    "doe":"12-10-23",
    "rating":5
}

let {description,category,dom,doe,...newObj}=product;
console.log(product)
console.log(newObj)
newObj.discount='20%'
console.log(newObj)
console.log(product)
