const numbers = [1, 2, 3, 4, 5, 6]

// Somando todos os elementos do array e adicionando um valor inicial

const sum = (total, el) => total + el
const total = numbers.reduce(sum, 100)

console.log(total)

// =====================================================================

// Calculando a média dos elementos de um array

const avg = (acc, el, i, array) => {
  if(i === array.length - 1){
    return (acc + el) / array.length
  } else {
    return acc + el
  }
}

const result = numbers.reduce(avg)
console.log(result)