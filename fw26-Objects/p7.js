//to delete
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
delete details.hobby[0];//using dot notation
delete details["address"]["landmark"];//using bracket notation
console.log(details);