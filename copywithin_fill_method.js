// arr.copyWithin(target,start,end) ;
let arr = [1,2,3,4,5];
arr.copyWithin(1,2);
console.log(arr); // [ 1, 3, 4, 5, 5 ]

arr = [1,2,3,4,5];
arr.copyWithin(1,2,3);
console.log(arr); //[ 1, 3, 3, 4, 5 ]

arr = [1,2,3,4,5];
arr.copyWithin(1,-1);
console.log(arr); //[ 1, 5, 3, 4, 5 ]



/*******************************************/
// arr.fill(value,start,end)
arr = [1,2,3,4,5];
arr.fill(1,1,3);
console.log(arr); //[ 1, 1, 1, 4, 5 ]

