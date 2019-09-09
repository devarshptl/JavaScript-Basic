// call() Method
function Magic(){
	return `Welcome to ${this.name}`;
}

const obj1 = {name: "Devarsh"};
const obj2 = {name: "Patel"};

console.log(Magic.call(obj1)); //Welcome to Devarsh
console.log(Magic.call(obj2)); //Welcome to Patel
