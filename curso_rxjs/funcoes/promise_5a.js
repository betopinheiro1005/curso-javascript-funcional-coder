function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            console.log('temp')
            const valorSorteado = Math.random()
            if(valorSorteado < chanceErro) {
                console.log(`Valor sorteado: ${valorSorteado}`)
                reject('Ocorreu um erro!')
            } else {
                console.log(`Valor sorteado: ${valorSorteado}`)
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))