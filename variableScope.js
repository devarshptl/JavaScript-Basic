function f(x){
	return x/2;
}
console.log(f(10)); // 5
// console.log(x); // x is not defined


const x = 5;
function f1(){
	console.log(x); // 5
}
function f2(){
	console.log(y); // 10
}
const y = 10;
f1();
f2();
// y = 10 will give an error of undefined 