// nested object
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
console.log(details.address.city);
console.log(details.address.state);

console.log(details.address.pincode);//dot notation
console.log(details["address"]["landmark"]);//bracket notation