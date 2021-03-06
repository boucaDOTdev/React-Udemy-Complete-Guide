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

//Spread & Rest Operators
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]
console.log(newNumbers)

const person3 = {
  name: 'Alex'
}

const newPerson3 = {
  ...person3,
  age: 22
}

console.log(newPerson3)

const filter = (...args) => {
  return args.filter((el) => el === 1)
}

console.log(filter(1, 2, 3))

//Destructuring
/*
not working in node
const numbers2 = [1, 2, 3]
[num1, num2] = numbers2
console.log(num1, num2)*/

//Reference and Primitive Types Refresher

//Refreshinng Array Functions
const numbers3 = [1, 2, 3]

const doubleNumArray = numbers3.map((num) => {
  return num * 2
})

console.log(numbers3)
console.log(doubleNumArray)
