/* Global Scope*/
let name = 'Daily';
let sub = 4000;
function show(){
	console.log(`${name} you have ${sub} Subscribers`);
}
function make(){
	console.log(`Thank you so much ${sub} Subscriber`);
}
show();
make();


// with object
const obj = {
	name : 'Daily',
	sub : 19
};
function show1(){
	console.log(`${obj.name} you have ${obj.sub} Subscribers`);
}
function make1(){
	console.log(`Thank you so much ${obj.sub} Subscriber`);
}
show1();
make1();


/* Block Scoping*/

console.log("Block Start :::::::::::");
{
	console.log("inside Block"); // inside Block
	const x = 5;
	console.log(x); // 5
}

console.log("Block End"); // Block End
console.log(x); // x is not  defined


