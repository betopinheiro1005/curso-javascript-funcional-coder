nums = [3, 2, 1, -3, 4, 7]

Array.prototype.meuReduce = function(fn, inicial) {
	let acc = inicial

	for(let i = 0; i < this.length; i++) {
		if(!acc && i === 0) {
			acc = this[i]
		} else {
			acc = fn(acc, this[i], i, this)
		}
	}
	return acc
}

const soma = (acc, el) => acc + el
console.log(nums.meuReduce(soma))