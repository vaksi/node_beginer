function bil1(){
	return 123; 
}
console.log(bil1());

function bil2(){
	console.log(123); 
}

//Immediately Executing Function
(function bil3(){
	console.log("Bil was be execute");
})();

var bil = 123; 
if (true){
	var bil = 123; 
}
console.log(bil);

var bil = 123; 
if (true){
	(function (){
		var bil = 1234;
	})();
}
console.log(bil); 

//Anhonymous Function 
var annbil1 = function namedFunction() {
	console.log("annbil1");
}
annbil1(); 

var annbil2 = function () { // no using name function
	console.log("annbil2");
}
annbil2(); 

// Higher-Order Functions 
setTimeout(function (){
	console.log('2000 Miliseconds have passed since this demo started');
},2000); //set time out function => funtion wil ber running after 2000 milisecon 

function testing(){
	console.log("2 second have passed since this demo started");
}
setTimeout(testing,2000);

//Closures 
function outerFunction(arg){
	var variableInOuterFunction = arg;

	function bar() {
		console.log(variableInOuterFunction); // access a variable from the outer scope 
	}

	//call the local function to demonstrate that it has access to arg
	bar();
}
outerFunction('Hello jink');

function outerFunction1(arg){
	var variableInOuterFunction = arg;
	return function(){
		console.log(variableInOuterFunction);
	}
}
var innerfunction = outerFunction1('hello jink');
innerfunction();





