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
