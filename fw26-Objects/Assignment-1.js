let student=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let score= [32, 30, 26, 28, 44];
let empty_str=[];
for(let i=0;i<student.length;i++)
  {
    let object={};
    object.Name=student[i];
    object.score=score[i];
    empty_str.push(object);
  }
console.log(empty_str);