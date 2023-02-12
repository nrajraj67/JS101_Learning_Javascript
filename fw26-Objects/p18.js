 let pos_no=[1,2,3,4,2,3,4,5,6];
let object={};
    for(let k=0;k<pos_no.length;k++)
      {
        if(object[pos_no[k]]==undefined)
        {
          object[pos_no[k]]=1;
        }
        else
        {
          object[pos_no[k]]++;
        }
      }
for(let i in object)
  {
    if(object[i]%2==0)
    {
      delete object[i];
    }
  }
console.log(object);
