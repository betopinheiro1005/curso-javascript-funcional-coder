function bomDia() {
	console.log('Bom dia!')
}

const boaTarde = function () {
  console.log('Boa tarde!')
}

// Passando uma função como parâmetro para outra função

function runFunction(fn){
  if(typeof fn === 'function'){
    fn()
  }
}

runFunction(3)
runFunction(bomDia)
runFunction(boaTarde)

// Retornar uma função a partir de outra função

function potencia(base) {
	return function(exp) {
		return Math.pow(base, exp)
	}
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
console.log(potencia(3)(4))