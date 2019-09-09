const obj = {
	name : `Devarsh`,
	age : 19,
	detail : function(){
		return `Detail : ${this.name},${this.age}`;
	}
}
console.log(obj.detail()); // Detail : Devarsh,19

const m1 = obj.detail;
console.log(m1 === obj.detail); // true