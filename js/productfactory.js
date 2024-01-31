function product(name,description,price){
    return{
        name,
        description,
        price,
    
    calculateDiscount:function(percentage){
       return this.price-(this.price*percentage/100)
    },
    display:function(){
return `the name of product:${name}, description of product:${description}, price of the product:${this.price}`
    }
  };
}
let product1=product("xyz","some description",1000);
console.log(product1.price)
product1.calculateDiscount(20);
console.log(product1.price)

function offers(){
    console.log(product1.price);
    let percent=document.getElementById('offers').value
    document.getElementById('afterdiscount').innerHTML=product1.calculateDiscount(percent)
}


function display(){
    document.getElementById('display').innerHTML=product1.display()
}