let arr=[1,2,3,4,5,6,7,8,9,10];
let count=0;
let count1=0;
for(let i=0;i<arr.length;i++)
  {
    if(arr[i]%2==0)
    {
      count++;
    }
    else
    {
      count1++;
    }
  }
console.log("even:",count);
console.log("odd :",count1);
