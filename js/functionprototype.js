// constructor function

function createproduct(name,price,quanity){
    this.name=name;
    this.price=price;
    this.quanity=quanity;
}
createproduct.prototype.calculateprice=function(){
    return this.price * this.quanity;
}

createproduct.prototype.discountprice=function(discountrate){
    let totalprice=this.calculateprice();
    return totalprice -totalprice * discountrate;
}

let product1=new createproduct('xyz',80,3);
console.log(product1)
console.log(product1.calculateprice());
console.log(product1.discountprice(10/100));
let product2= new createproduct('abc',76,4)
console.log(product2.calculateprice());
console.log(product2.discountprice(10/100));
console.log(product2.__proto__===Object.prototype)
console.log(product2.__proto__===createproduct.prototype)