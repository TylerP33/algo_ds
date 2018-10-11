var largest = 0;
for(var i = 100; i < 999; i++){
	for(var j = 100; j < 999; j++){
		var final = i * j
			if (final === parseInt(final.toString().split('').reverse().join(''))){
				if (final > largest){
					largest = final
					console.log(final)
			}
		}
	}
}





//if (last === parseInt(last.toString().split('').reverse().join(''))){
//				console.log(last)
//			}

// aaa * bbb = palindrome
// has to be three digits per aaa/bbb and has to be a palindrome
// find all products between 100 * 999 - nope; that is dumb
// find all products (10,000 - 99,8001) then divide by three digit numbers in a loop



//  if (final === parseInt(final.toString().split('').reverse().join(''))){
//							final
//	}	
