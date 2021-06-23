const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
	return new Promise(resolve => {
		fs.readFile(caminho, function(_, conteudo){
			resolve(conteudo.toString())
		})
	})
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
	.then(conteudo => conteudo.split('\n'))
  .then(linhas => console.log('Número de linhas: ' + linhas.length + ' - Segunda linha:', linhas[1]))

