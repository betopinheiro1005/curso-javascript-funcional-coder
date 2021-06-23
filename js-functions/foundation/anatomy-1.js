// Function declaration

// A função não recebe parâmetro e não retorna nada
function sayHello(){
  console.log('Hello!')
}

sayHello()

// A função recebe parâmetro e não retorna nada
function sayHelloTo(name){
  console.log('Hello ' + name)
  console.log(`Hello ${name}`)
}

sayHelloTo('Mike')

// A função não recebe parâmetro e retorna o valor

function returnHi(){
  return 'Hi!'
}

const greeting = returnHi()
console.log(greeting)

// A função recebe parâmetro e retorna o valor

function returnHiTo(name){
  return `Hi ${name}`
}

console.log(returnHiTo('John'))