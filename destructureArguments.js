const obj = {
	name : "Devarsh",
	age : 19,
	school : "SCOPE"
};
function getData({name,age,school}){
	return `${name} ${age} ${school}`;
};
console.log(getData(obj));



// for array
const arr = ['Devarsh', 'Patel'];
function getData1([w1,w2]){
	return `${w1} ${w2}`;
};
console.log(getData1(arr));
