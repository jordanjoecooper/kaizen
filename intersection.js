// Intersection
const c = [1,2,3,4]
const d = [3,4,5,6]

const intersectionTry = (c, d) => c.filter(value => d.includes(value));

console.log(intersectionTry(c,d))