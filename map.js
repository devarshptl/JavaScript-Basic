const arr = [1,2,3,4];

const map1 = arr.map((x) => x*2);
console.log(arr); //[ 1, 2, 3, 4 ]
console.log(map1); //[ 2, 4, 6, 8 ]


// object

const cart = [{product : `laptop`, price : 30000},{product : 'mobile',price : 14000}];
const product = cart.map( x => x.product); // [ 'laptop', 'mobile' ]
console.log(product);
const price = cart.map( x => x.price); // [ 30000, 14000 ]
console.log(price);