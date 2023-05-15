//Spread Operator
const flavours = ["choco", "vanilla", "orange", "coffee"]
const [first, ...rest] = flavours

console.log(rest.join(", "))
