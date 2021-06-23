// Função Contrutora
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
    let privado = 3
}

const p1 = new Produto('Caneta', 8.59)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 2345.98)
console.log(p2.preco)
console.log(p2.privado)