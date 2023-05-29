class Person {
    constructor (firstName, lastName='kutlu'){
this.firstName = firstName
this.lastName = lastName 
this.skills = []
}
getFullName() {
    return this.firstName + ' ' + this.lastName
}
appendSkill(skill) {
    this.skills.push(skill)
}
get getSkills() {
    return this.skills
}
set setSkill(skill){
   this.skills.push(skill)
}

}
const person1 = new Person('meryem','kutlu')
const person2 = new Person('buse', undefined)
const person3 = new Person('akif emre','senol')

person1.setSkill = 'javascript'
person1.setSkill = 'react'


person1.appendSkill = ('html')

console.log(
    person1.getSkills
    
    )
