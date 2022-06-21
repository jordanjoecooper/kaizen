const input = ["APPLE", 0923, "Crisps", false, "magazine", "lol", "cHaIr", "teleVISION", "LOL", 02, true, "bob" ]
const output = []

const filterOutNonStringData = (input) => input.filter((item) => {
    const cleansedData = []
    let i = 0
    let j = 0

    if(typeof(item) === "string"){
        return cleansedData.push(item)
    }
})

const identifyAnagram = () => {
    const cleanData = filterOutNonStringData(input)
    
    cleanData.filter((word) => {
    if(word.split("").reverse().join("") === word) {
        return output.push(word)
    }
})
}

identifyAnagram(input)
console.log("The following words were anagrams: ", output)


/* 
Given an array of words (of known length of 10). Find any anagrams that exist within and output them
1. Remove non string data types 
2. Remove duplicate words

Improvements

1. lowercase words and remove string sensitivity
2. Use reduce
3. Make more functional and stop mutating data.
*/