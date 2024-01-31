let person={
    "name":"partha",
    "age":"21",
    "contact_no":9176125078
}
console.log(person)
//Adding a property "location" to the person object
person.location="chennai"
console.log(person)
console.log(`${person['name']} ${person['age']} ${person['location']}`)
//removing a property
delete person.location;
console.log("after deleting location" + JSON.stringify(person))

//cloning a object
let source={
    'prop1':'value1',
    'prop2':'value2'
}
let target={}
Object.assign(target,source)
console.log(target)
console.log(source)
target.prop3='values'
console.log(target)
console.log(source)
//cloning or merging more than one source objects

let source1={
    "name":"partha",
    "age":"21",
    "qualification":"BE"
}
let source2={
    "street":"10th street",
    "city":"chennai",
    "state":"Tamilnadu"
}
let source3={
    "designation":"manager",
    "salary":20000
}
let employeeDetails={}
Object.assign(employeeDetails,source1,source2,source3)
console.log(employeeDetails)
delete employeeDetails.state
console.log(employeeDetails)