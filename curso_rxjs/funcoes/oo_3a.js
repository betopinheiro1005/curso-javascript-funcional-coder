// Função Contrutora
function Produto(nome, preco, desc = 0.50) {
    this.nome = nome
    this.preco = preco
    this._desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this._desc)
    }
}

Produto.prototype.log = function() {
    console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
}

const p1 = new Produto('Caneta', 10)
console.log(p1.nome)
p1.log()

const p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())