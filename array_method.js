//array method

var a=[10,20,30,40];
var b=[50,60,70,80,90];

//insert the element at the end of the array
a.push(100);
console.log(a);
//insert the element at the begining of the array
a.unshift(0);
console.log(a);
//remove the element at the end of the array
a.pop();
console.log(a);
//remove the element at the begining of the array
a.shift();
console.log(a);
// concatnating two array
var c=[].concat(a,b,100);
console.log(c);
//slice the array
var d=a.slice(2,4);
console.log(d);
var e=c.slice(-4,-1);
console.log(e);
// if we interchange the start index and end index slice will not extract value.
//includes()
var x=["Subho","Ram","Shyam","Yadu"];
console.log(x);
console.log(x.includes("subho")); //false
console.log(x.includes("Subho")); //true

//indexOf(searchItem,position)

x.push("Shyam");
x.push("Subho");

console.log(x.indexOf("Subho"));
console.log(x.indexOf("Subho",2));

//lastindexOf(searchItem,position)

console.log(x.lastIndexOf("Subho"));
console.log(x.lastIndexOf("subho",4));

//sort()

console.log(a.sort());

//reverse()

console.log(a.reverse());

//splice(start_index,how_many_item_deleted;new item)

//join()
