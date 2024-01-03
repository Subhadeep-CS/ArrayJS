var a=[10,20,30,40];
// delete(a[1]);
console.log(a);
//but facts is that it's delete the 
a.splice(1,1);
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}