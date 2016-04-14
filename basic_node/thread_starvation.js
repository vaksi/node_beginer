// Time it
console.time('timer');
setTimeout(function(){
	console.timeEnd('timer');
},1000)

// large Operation

console.time('timeit');

//large operation
function fibonacci(n){
	if(n<2)
		return 1;
	else
		return fibonacci(n - 2) + fibonacci(n -1);
}
fibonacci(44);
console.timeEnd('timeit');