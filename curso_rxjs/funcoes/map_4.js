const carrinho = [
	{ nome: 'Caneta', qtde: 10, preco: 7.99 },
	{ nome: 'Impressora', qtde: 0, preco: 649.50 },
	{ nome: 'Caderno', qtde: 4, preco: 27.10 },
	{ nome: 'Lápis', qtde: 3, preco: 5.82 },
	{ nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

Array.prototype.meuMap = function(fn) {
	const novoArray = []
	for(let i = 0; i < this.length; i++) {
		novoArray.push(fn(this[i], i, this))
	}
	return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)

console.log(totais)
