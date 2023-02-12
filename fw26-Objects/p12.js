let object={
  name:"Nikhil",
  age:21,
  location:"Nawada",
  driving_license:true,
  dinner:true,
  phone:226233
};
// add------> fathername ,sister,bestfriend,

object.fatehrname="mukesh";
object.sister="yes";
object.bestfriend="shubham";
console.log("after adding");
console.log(object);

console.log("******************");
// update---->phone,age,change driving_licence,dinner
object.phone=98988998;
object.age=20;
object.driving_license=false;
object.dinner=false;

console.log("afetr updating");
console.log(object);
console.log("******************");

// delete driving_licenece,dinner
delete object.driving_license;
delete object.dinner;
console.log("afetr deleting");
console.log(object);