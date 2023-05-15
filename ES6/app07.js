//Array Destructuring - Iterator Design Patterns
// let [firstRec] = ["Blr", "Del", "Mum"]
// console.log(firstRec);
//let [firstRec,x1,x2] = ["Blr", "Del", "Mum"]
let [,,x2] = ["Blr", "Del", "Mum"]
console.log(x2);

let [,,[,y1]]=[1, 2, [3, 4]]
console.log(y1);

let a2 = 10 , b2 = 20;
[a,b]=[b2,a2]
console.log(a,b)