 export default class person{
    #firstname
    #lastname
    #gender
    static count=0;
    constructor(firstname,lastname,gender){
        this.#firstname=firstname;
        this.#lastname=lastname;
        this.#gender=gender;
        person.count++;
    }
     get firstname(){
        return this.#firstname;
     }
     get lastname(){
        return this.#lastname;
     }
     get gender(){
        return this.#gender
     }
    
}

let person1=new person('john','jacob','M')
let person2=new person('partha','sarathi','M')
let person3=new person('anandi','avadi','F')

console.log(person.count)
console.log(`${person1.firstname} ${person1.lastname} ${person1.gender}`)
console.log(`${person2.firstname} ${person2.lastname} ${person2.gender}`)
console.log(`${person3.firstname} ${person3.lastname} ${person3.gender}`)