const arr = [1,2,3,4,5];
console.log(arr[0]); // 1
console.log(arr.indexOf(1)); // 0


/********************************/
const arr2= [`Devarsh`, 1, undefined, null];  // non-homogenous
console.log(arr2[0]); //Devarsh
console.log(arr2[2]); // undefined


/*********************************/
const arr3 = [["one","two"],[1,2,3,4]]; // 2-D array
console.log(arr3[0][1]); // two
console.log(arr3[1][2]); // 3


/*********************************/
const arr4 = [
	{name: "devarsh", no: 37},
	[
	{name: "tutorial", data : "literal"}
	]
];
console.log(arr4[0].name); // devarsh
console.log(arr4[1][0].name);// tutorial


/*****************************/
const arr5 = [
	{name: 'devarsh',age:19},
	[
		function(){
			return `inside function`;
		},
		"three"
	]
]
console.log(arr5[1][0]()); // inside function


/**************************************/
const arr6 = [2,3,4];
console.log(arr6.unshift(1)); // 4 ->lenght
console.log(arr6); // [1,2,3,4]

console.log(arr6.shift()); // 1 ->return value 
console.log(arr6); // [2,3,4]

console.log(arr6.push(5)); // 4->lenght
console.log(arr6); // [2,3,4,5]

console.log(arr6.pop()); // 5 -> return pop value
console.log(arr6); // [2,3,4]


/*****************************************/
const arr7 = [1,2,3,4];
const arr8 = [5,6,7,8];

const arr9 = arr7.concat(arr8); // arr7.concat(5,6,7,8);
console.log(arr9); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const arr10 = arr7.slice(1,3); // arr7.slice(2);
console.log(arr10); // [ 2, 3 ]
console.log(arr7.slice(-1)); // [ 4 ]

const arr11 = [1,4,5];
const arr12 = arr11.splice(1,0,2,3);
console.log(arr11); // [ 1, 2, 3, 4, 5 ]

console.log(arr11.splice(1,2)); // [ 2, 3 ]
console.log(arr11); // [ 1, 4, 5 ]






