  let array=["nikhil","shubham","anadi","nikhil","shubham","anadi",];
let object={};

//adding key and values inside the object
//objectname["key"]=value;
for(let i=0;i<array.length;i++)
  {
    object[array[i]]="unique";
  }
console.log(object);


//length of the objet
console.log(Object.keys(object).length);