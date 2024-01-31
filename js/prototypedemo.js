let user={
    getFullName:function(firstname,lastname,gender){
    if(gender==='f')
    return `Ms ${firstname} ${lastname}`
else
     return `Mr ${firstname} ${lastname}`
}
}

let student={
    firstname:'partha',
    lastname:'sarathi',
    age:20,
    gender:'M'

}

let tutor={
    firstname:'anandi',
    lastname:'akashya',
    age:35,
    gender:'f'
}


student.__proto__=user;
console.log(student.getFullName(student.firstname,student.lastname,student.gender))
console.log(student.__proto__)
tutor.__proto__=user;
console.log(tutor.getFullName(tutor.firstname,tutor.lastname,tutor.gender))
console.log(tutor.__proto__)