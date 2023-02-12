let details ={
  name :"Nikhil",
  age:20,
  phone_no:1201132121,
  hobby : ["Playing cricket","pc games","hockey","football"],
 
   address:{
     city:"nawada",
       state:"Bihar",
       pincode:805110,
  landmark: "printing press"
   }
}
//only for objects ==>for --in loop
for(let i in details)
  {
    // console.log(a)//it is giving me all the keys
    //only one way 
    console.log(details[i]);//it is gving all the values
  }
