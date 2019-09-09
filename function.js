function myFunction(a,b=0 ){
	return `addition is ${a+b}`;
}

var data = myFunction(3,3);
console.log(data);




// anonymus function


var myFunction = function(a,b){
	return a+b;
}
console.log(myFunction(10,2));

var obj = {
	name : "devarsh",
	invoke : function(){
		return `Function called`;
	},
	invoke1(){
		return 'another function';
	}
};

console.log(obj.invoke());
console.log(obj.invoke1());
