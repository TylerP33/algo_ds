function findHighestPrimeFactor(number){
	for (var i = 0; i < number; i++){
		if (
			i % 2 !== 0 
			&& i % 3 !== 0 
			&& i % 4 !== 0 
			&& i % 5 !== 0 
			&& i % 6 !== 0 
			&& i % 7 !== 0 
			&& i % 8 !== 0 
		&& i % 9 !== 0
			) {
			if (number % i == 0) {
			console.log(i)
			} 
		}
	}
}

findHighestPrimeFactor(111)
