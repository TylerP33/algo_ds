function sumofSquares(n) {
	const arr = []
	for (var i = 0; i <= n; i++){
		arr.push(Math.pow(i, 2));
	}
	let result = arr.reduce((a, b) => a + b);

	return result
}

function sumOfNatural(n) {
	const secArr = []
	for (var i = 0; i <= n; i++){
		secArr.push(i);
	}
	let result = secArr.reduce((a, b) => a + b);

	return Math.pow(result, 2)
}


console.log(sumOfNatural(100) - sumofSquares(100))


