var largest = 0;
for(var i = 100; i < 1000; i++){
	for(var j = 100; j < 1000; j++){
		var final = i * j
			if (final === parseInt(final.toString().split('').reverse().join(''))){
				if (final > largest){
					largest = final
					console.log(largest)
			}
		}
	}
}

// NEEDS REFACTOR


