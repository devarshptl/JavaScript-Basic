var v = 4;
console.log(v); // 4


console.log(x);
var x = 4; // undefined


/*console.log(x1);
let x1 = 4; // x1 is not defined */

for(var i=0;i<3;i++){
	console.log(i);
}
console.log(`var variable :` + i); // var variable :3


for (let k=0;k<5;k++) {
	console.log(k);
}
console.log(`let Variable`+k); // k is not defined

