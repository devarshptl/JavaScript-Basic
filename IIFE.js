// immediately invoke function expression

(function(){
	console.log('Devarsh Patel');
})();

// 
const f = (function(){
	let count = 1;
	return function(){
		return `value of count ${count++}`;
	}
})();

console.log(f()); // value of count 1
console.log(f()); // value of count 2
console.log(f()); // value of count 3