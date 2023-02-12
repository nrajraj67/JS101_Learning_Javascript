// let arr=[1,2,-1,-1,-6,3];
// let aa="";
// for(let i=0;i<=arr.length;i++)
// {
//   if(arr[i]<0)
//   {
//     arr[i]=0;
//   }
// }

// console.log(arr);

let N=[0,5,68,178];
 let sum=0;
    if(N<=50)
    {
        sum=80+(N*3);
        console.log(sum);
    }
    else if(N>50 && N<=150)
    {
        sum=80+((N-=50)*3)+(N*5);
        console.log(sum);
    }
    else if(N>150)
    {
        sum=80+((N-=50)*3)+((N-=100)*5)+N*10;
        console.log(sum);
    }