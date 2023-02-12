let details ={
  name :"Nikhil",
  age:20,
  phone_no:1201132121,
  address:"masai School",
  hobby : "Playing cricket",
  pincode: 805110
}

//update the already present data
//1st way using dot notation
details.address="Nawada"
details.age=22;
//2nd way using bracket notation
details["hobby"]="Masti time"
details["pincode"]=805122;
console.log(details);


