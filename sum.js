/*
Must return the sum of all array elements.
*/

const data =[1, 1000000001, 1000000002, 16, 1000000003, 4, 1000000004, 1000000005, 57]
let result = 0

const sum = (data) => {
  const length = data.length 
  for(let i = 0; i < length; i++){
    result += data[i]
  }
  return result
}

console.log(sum(data))