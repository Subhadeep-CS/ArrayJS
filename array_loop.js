var a=[10,20,30,40];

//print using while loop
var counter=0;
while(counter<a.length)
{
    console.log(a[counter]);
    counter++;
}

//print using for loop
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}

//print using for of loop

for(let value of a)
{
    console.log(value);
}

//print using for in loop

for(let index in a)
{
    console.log(a[index]);
}