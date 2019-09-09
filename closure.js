/* Closure */

function Counter() {
	let count = 0;
	return function(){
		return count++;
	};
}

let counter = Counter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// type 2
let closure;
{
	let block = `character`;
	closure = function(){
		console.log(block);
	}
}
closure();


// object
let f;
{
	let obj = {
		name : `Devarsh`
	};
	f = () => {return obj;}
}

console.log(f()); // { name: 'Devarsh' }
let ref= f();
console.log(ref.name); // Devarsh

