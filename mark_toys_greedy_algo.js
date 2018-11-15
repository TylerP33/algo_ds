prices = [1, 2, 3, 4]
k = 7

function maximumToys(prices, k) {
let sum = 0;
let sorter = prices.sort((a, b) => a - b);
let counter = 0

    for (var i = 0; i < sorter.length; i++){
        if (sorter[i] < k){
        	sum += sorter[i]
        	if (sum <= k){
        		sorter[i]
        		counter++
        	}
        }
    }
    console.log(counter)
}

maximumToys(prices, k)