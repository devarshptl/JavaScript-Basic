class Model {
	constructor(a,b) {
		this.a = a;
		this.b = b;
	}
}


const obj = new Model(5,6);
const obj2 = new Model(7,8);
console.log(obj.a); // 5
console.log(obj instanceof Model); // true


const arr = [1,2,3];

console.log(arr instanceof Array); // true

console.log(arr instanceof Date); // false

delete obj.a;

console.log(obj.a); // undefined

delete arr[1];

console.log(arr[1]); // undefined


arr.pop();
console.log(arr);




