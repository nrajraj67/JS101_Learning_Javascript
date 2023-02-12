let array=[3,4,5,6,7,8,3,4,5,6];
let object={};
let sum=0;
for(let i=0;i<array.length;i++)
  {
    if(object[array[i]]==undefined)
    {
      object[array[i]]=1;
      
    }
    else
    {
     object[array[i]]++;
       // sum+=array[i];
      
    }
}

for(let key in object)
  {
    // console.log(array[key]);
    if(object[key]==1 )
    {
      // console.log(key);
      sum+=Number(key);
      
  }

    // console.log(array[key]);
  }
console.log(sum);