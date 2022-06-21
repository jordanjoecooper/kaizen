const data = [10,99,59,9,2,8,11,7,14,16,6, 12,111111,567,321554,78,13,1,88,667,09,532,19,5,7,3,78,44,33,22,77,4353,213123,676767]

const sortData = data.sort((a, b) => a - b)
console.log(sortData)

/*
Given an array of numbers in a random order.
Sort them using bubblesort into their ascending order 0-10

What does sort do?

Sorts an array in place. This method mutates the array and returns a reference to the same array.

@param compareFn
Function used to determine the order of the elements. 
It is expected to return a negative value if the first argument is less than the second argument, 
zero if they're equal, and a positive value otherwise. 
If omitted, the elements are sorted in ascending, ASCII character order.

Improvement make initial arr randomly generated each time?

*/

// const generateTestData = () => {
//     const limit = 1000
//     const container = []
//     let i = 0;
//     for(i; i < limit; i++){
//         console.log(i)
//         const number = Math.random(5).toPrecision
//         container.push(number)
//     }
//     return container
// }

// console.log(generateTestData())