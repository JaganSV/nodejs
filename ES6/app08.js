//Object Destructuring
const myBoxA = {
    heightA: 12,
    widthA: 14,
    metaData: [{"unit": "inch"}, {"price": 1000, "currency" : "INR"}]
};

let { heightA , widthA } = myBoxA;
console.log(heightA, widthA );

let{metaData} =myBoxA
let [,{currency}] = metaData;
console.log(currency);

