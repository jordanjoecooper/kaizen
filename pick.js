// pick

const a = [{a:1, b:2, d:3}]
const b = [{a:1, b:2, d:5}]

const picker = (values, toPick) => values.map(value => value[toPick])

console.log(picker(a, "d"))
