function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

async function executar() {
    esperarPor(1500)
    console.log('Async/Await 1...')

    esperarPor(1500)
    console.log('Async/Await 2...')

    esperarPor(1500)
    console.log('Async/Await 3...')
}

executar()