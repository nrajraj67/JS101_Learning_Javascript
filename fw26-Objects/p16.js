let student=["Nikhil","Shubham","Anadi"];
let score=[22,24,23];

let result=[];
for(let i=0;i<student.length;i++)
  {
    let object={};
    object.name=student[i];
    object.score=score[i];
    result.push(object);
  }
for(let i=0;i<3;i++)
  {
    console.log(result[i]);
  }

