function person(name,age){
    return{
        name,
        age,
        display:function(){
           console.log(`${this.name} and age is ${this.age}`)
        }
    };
}
let person1=person('partha',20)
console.log(person1.name);
console.log(person1.age);
person1.display();
person1.name='sarathi';
console.log(person1.name);
person1.display();