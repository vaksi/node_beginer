//===============number====================

var bilangan1 = 12; 
var bilangan2 = 23;

console.log(bilangan1 + bilangan2); 
console.log(bilangan1 - bilangan2);
console.log(bilangan1 * bilangan2);
console.log(bilangan1 / bilangan2);
console.log(bilangan1 % bilangan2);

//===============boolean==================
// note '!'=not, '&&'=and, '||'=or,  
var bil1 = true;

console.log(bil1);
console.log(!bil1 && bil1); 

//================Array=====================

var bil1 = [];

bil1.push(1);
console.log(bil1); //to push number 1 to array []

bil1.unshift(2);
// add to the top

console.log(bil1);
// prints [2,1]
 
// Arrays are zero index based:
console.log(bil1[0]); // prints 2

//==================Object Literal===============

var bil = {}; // define literal object 
console.log(bil);
bil.bar = 123; // input literal object 
console.log(bil);
//or 
var bil = {
	bar: 123
};
console.log(bil);
var foo = {
	bar: 123,
	bas: {
			bas1: 'some string',
			bas2: 345
		 }
};
console.log(foo);