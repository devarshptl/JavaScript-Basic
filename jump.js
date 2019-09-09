var n = 5;

//break
console.log('\nbreak:');
for(i=0;i<n;i++){
	if(i==3){
		break;
	}
	console.log(i);
}


//continue;
console.log('\ncontinue:');
for(i=0;i<n;i++){
	if(i==3){
		continue;
	}
	console.log(i);
}


// return
console.log("\nreturn:");
for(i=0;i<n;i++){
	if(i==2){
		return i;
	}
	console.log(i);
}
