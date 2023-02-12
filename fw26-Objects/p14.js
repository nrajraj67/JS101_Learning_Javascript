// very important question please console it and see the output
let array=[3,4,5,6,7,3,4,5,6];
let object={};
for(let i=0;i<array.length;i++)
  {
    if(object[array[i]]==undefined)
    {
      object[array[i]]=1;
    }
    else
    {
      object[array[i]]++;
    }
}
for(let key in object)
  {
    // console.log(array[key]);
    if(object[key]>=2 )
    {
      console.log(key);
  }
  }

