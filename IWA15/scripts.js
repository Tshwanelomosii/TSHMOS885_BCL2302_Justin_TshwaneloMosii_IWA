

//scripts.js

const data = {    // This code defines an object data which contains an array of three lists,
	lists: [           //where each list is represented by an array. Each of these inner arrays
		['first', [15, 11, 13, 7, 5]],  // has a string as the first element and an array of integers as the second element.
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
//fixed errors by removing curly brackects and added Square bracket
const  first = data.lists[0][1];  // The code then declares three variables first, second, and third which are assigned the second element
const  second =  data.lists[1][1];  //(the array of integers) of the first, second, and third list respectively.

const  third = data.lists[2][1];

const result = [] 

const extractBiggest = () => { // Then the code defines a function named extractBiggest which checks which of the three arrays (first, second, and third)
	                          //contains the largest number at the end of the array (i.e., the number with the highest index)
	if (first[first.length - 1] >= second[second.length - 1]   && first[first.length -1] >= third[third.length -1])
	 {
		return first.pop();//, removes that number from the array using the pop() method, and returns that number.
	}

	if (second[second.length - 1] >= third[third.length - 1]) {
		return second.pop();
	}
	
	return third.pop();
}

// Only edit above

result.push(extractBiggest())  // After defining the extractBiggest function, the code creates an empty array called result.
result.push(extractBiggest())  // The code then repeatedly calls the extractBiggest function 15 times and appends the result to the result array.

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result) // Finally, the code logs the contents of the result array to the console.
                   // The end result is an array containing the largest numbers from each of the three initial arrays, sorted in descending order







