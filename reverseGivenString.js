/*
Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

const reverseString = (str) => str.split('').reverse().join("")
// Split string into characters as an array (each char is an array entry)
// Reverse the order of the array (flip back to front essentially)
// Rejoin all the characters in the array from front to back thus reversing the word as the final output
reverseString("hello");