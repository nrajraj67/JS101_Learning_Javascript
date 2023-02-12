let array=[1,2,2,1];
let object={
  
};
for(let i=0;i<array.length;i++)
  {
    if(object[array[i]]==undefined)
    {
      object[array[i]]=1;
      // console.log(object[i]);
    }
    else 
    {
      object[array[i]]++;
      // console.log(object[i]);
    }.
  }
console.log(object); 