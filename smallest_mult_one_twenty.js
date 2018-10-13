for(var j = 20; j < 300000000; j++){
		if (j % 1 === 0 
			&& j % 2 === 0 
			&& j % 3 === 0 
			&& j % 4 === 0 
			&& j % 5 === 0
			&& j % 6 === 0
			&& j % 7 === 0
			&& j % 8 === 0
			&& j % 9 === 0
			&& j % 10 === 0
			&& j % 11 === 0
			&& j % 12 === 0
			&& j % 13 === 0
			&& j % 14 === 0
			&& j % 15 === 0
			&& j % 16 === 0
			&& j % 17 === 0
			&& j % 18 === 0
			&& j % 19 === 0
			&& j % 20 === 0
			){
			console.log(j)
	}
}


// NEEDS REFACTOR

// refactored / researched

const lcm = n => {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i / gcd(i, result);
  }
  return result;
};

console.log(lcm(20));
