let a=[1,2,3,4];

let b=a;
b.push(5);
/*
 if we do array assignment using assignment operator then the problem is it will only
 assign the reference of a inside b,that means if we modify the array b then it will
 modify the array a also.

 Here,you can see that i push 5 in array b but it push into a also.
 for resolve this,we can do array assignment by using immutating method.
*/

console.log(a);
console.log(b);

//Now by using concat() method.

/*
    concat() method is a immutating method,that will concat() arrays inside an new array
    and create  new array.
*/

let d=[1,2,3];
let e=[1,2,4];
//concat e with d
d=d.concat(e); //it will create a new array with all the element of d and e.
//now I want to assign e into a new array f by using concat.
let f=[].concat(e);
//it create a seprate copy of array inside memory,now if we change something in e 
//that will not effect in f.
e.push(5);
console.log(f);