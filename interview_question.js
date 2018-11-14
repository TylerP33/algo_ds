const arr = [
"1100", 
"1100", 
"11111", 
"10111",
]

function findMax(arr) {
var result = []
// first row
	if (arr[0][0] === "1" && arr[0][1] === "1" && arr[1][0] === "1" && arr[1][1] === "1"){
		result.push([1, arr[0][0], arr[0][1], arr[1][0], arr[1][1]]) 
	}

	if (arr[0][1] === "1" && arr[0][2] === "1" && arr[1][1] === "1" && arr[1][2] === "1"){
		result.push([2, arr[0][1], arr[0][2], arr[1][1], arr[1][2]]) 
	}

	if (arr[0][2] === "1" && arr[0][3] === "1" && arr[1][2] === "1" && arr[1][3] === "1"){
		result.push([3, arr[0][2], arr[0][3], arr[1][2], arr[1][3]]) 
	}

	if (arr[0][3] === "1" && arr[0][4] === "1" && arr[1][3] === "1" && arr[1][4] === "1"){
		result.push([4, arr[0][3], arr[0][4], arr[1][3], arr[1][4]]) 
	} 

// second row  
	if (arr[1][0] === "1" && arr[1][1] === "1" && arr[2][0] === "1" && arr[2][1] === "1"){
		result.push([4, arr[1][0], arr[1][1], arr[2][0], arr[2][1]]) 
	} 

	if (arr[1][1] === "1" && arr[1][2] === "1" && arr[2][1] === "1" && arr[2][2] === "1"){
		result.push([5, arr[1][1], arr[1][2], arr[2][1], arr[2][2]]) 
	} 

	if (arr[1][2] === "1" && arr[1][3] === "1" && arr[2][2] === "1" && arr[2][3] === "1"){
		result.push([6, arr[1][2], arr[1][3], arr[2][3], arr[2][3]]) 
	} 

	if (arr[1][3] === "1" && arr[1][4] === "1" && arr[2][3] === "1" && arr[2][4] === "1"){
		result.push([7, arr[1][3], arr[1][4], arr[2][3], arr[2][4]]) 
	} 
// last row

	if (arr[2][0] === "1" && arr[2][1] === "1" && arr[3][0] === "1" && arr[3][1] === "1"){
		result.push([8, arr[2][0], arr[2][1], arr[3][0], arr[3][1]]) 
	}
	if (arr[2][1] === "1" && arr[2][2] === "1" && arr[3][1] === "1" && arr[3][2] === "1"){
		result.push([9, arr[2][1], arr[2][2], arr[3][1], arr[3][2]]) 
	} 
	if (arr[2][2] === "1" && arr[2][3] === "1" && arr[3][2] === "1" && arr[3][3] === "1"){
		result.push([10, arr[2][2], arr[2][3], arr[3][2], arr[3][3]]) 
	} 
	if (arr[2][3] === "1" && arr[2][4] === "1" && arr[3][3] === "1" && arr[3][4] === "1"){
		result.push([11, arr[2][3], arr[2][4], arr[3][3], arr[3][4]]) 
	} 

	for (var i = 0; i < result.length; i++){
		console.log(result[i][0])
	}
}

findMax(arr)