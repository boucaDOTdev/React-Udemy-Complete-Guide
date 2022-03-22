//Understanding "let" and "const"

let myName = 'Alex'
console.log(myName)

myName = 'Alexandre'
console.log(myName)

//const myName = 'Alex'
// console.log(myName)

// myName = 'Alexandre'
// console.log(myName)

//Arrow Functions
const printMyName = (name) => {
  console.log(name)
}
printMyName('Alex')

const multiply = (number) => {
  return number * 2
}
console.log(multiply(2))

//Classes
class Human {
  constructor() {
    this.gender = 'male'
  }

  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human {
  constructor() {
    super()
    this.name = 'Alex'
  }

  printMyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender()

//Classes, Properties and Methods
class Human2 {
  gender = 'male2'

  printGender = () => {
    console.log(this.gender)
  }
}

class Person2 extends Human2 {
  name = 'Alex2'

  printMyName = () => {
    console.log(this.name)
  }
}

const person2 = new Person2()
person2.printMyName()
person2.printGender()
