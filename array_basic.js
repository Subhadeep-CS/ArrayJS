var a=[10,20,30];
var b=10;
//find out the length of the array
console.log(a.length);
//checking the type of array
console.log(typeof a); //we get bject in console
//how to check a variable is  array or not.
console.log(Array.isArray(a)); // we get  true that means it's a array.
console.log(Array.isArray(b)); //we get false that means it's not array
//swallow copy
var c=[10,20];
var d=c;
c.push(30);
console.log(c);
console.log(d);