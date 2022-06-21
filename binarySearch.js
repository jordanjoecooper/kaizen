/*
Binary Search 

- Only works when given list is in a sorted order.
*/

const newList = []

for(let i = 0; i < 1000; i++) {
  newList.push(i)
  console.log(newList.length)
}

const shortHandNewList = Array.from(Array(1000).keys())



const list = [1,3,5,7,9]

const binarySearch = (list, key) => {
  let start = 0
  let end = list.length -1

  while(start <= end){
    let mid = Math.floor((start + end) / 2)
    if(list[mid] === key){
      console.log(`- Found ${key} -`)
      return mid
    } else if(list[mid] < key){
      console.log("Searcing to the right -->")
      start = mid + 1
    } else {
      console.log("<-- Searching to the left")
      end = mid - 1
    }
    console.log("- Key not found -")
    return "Not found"
  }
}
console.log(shortHandNewList)
console.log(binarySearch(list, 10))