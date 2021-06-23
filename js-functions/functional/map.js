const numbers = [1, 2, 3, 4, 5, 6]

// ================================================

const numberV2 = numbers.map(function(el) {
	return el * 2
})

console.log(numberV2)

// ================================================

const numberV3 = numbers.map((el) => {
	return el * 3
})

console.log(numberV3)

// ================================================

const numberV4 = numbers.map(el => el * 4)

console.log(numberV4)

// ================================================

const numbersV5 = []
for(let n of numbers) {
	numbersV5.push(n * 2)
}

console.log(numbersV5)

// ================================================

const students = [
	{ name: 'Jake', score: 6.4 },
	{ name: 'Susan', score: 8.6 },
	{ name: 'Emma', score: 9.4 },
	{ name: 'Peter', score: 9.1 }
]

const getScore = el => el.score
const result = students.map(getScore).map(Math.ceil)

console.log(result)

// ================================================