// arrow function

const felizNatal = () => console.log('Feliz Natal!')
felizNatal()

// const saudacao = nome => "Fala " + nome + ", blz!?!"
const saudacao = nome => `Fala ${nome}, blz!?!`
console.log(saudacao('Maria'))

// =================================================

const somar = numeros => {
	let total = 0
	for(let n of numeros) {
		total += n
	}
	return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// ===================================================

const sum = (...num) => {
  console.log(Array.isArray(num))
	let total = 0
	for(let n of num) {
		total += n
	}
	return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11))

// ===================================================

const potencia = (base) => {
	return (exp) => {
		return Math.pow(base, exp)
	}
}

const pow = base => exp => Math.pow(base, exp)

console.log(potencia(2)(8))
console.log(potencia(3)(5))

// =====================================================

// this

Array.prototype.ultimo = function() {
	console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {
	console.log(this[0])
}

const numeros = [-333, 1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()
