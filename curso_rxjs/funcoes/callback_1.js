function exec(fn, a, b) {
	return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

// const cb = () => console.log('Exec...')
// setInterval(cb, 1000)

setInterval(function () {
	console.log('Exec 2...')
}, 1000)