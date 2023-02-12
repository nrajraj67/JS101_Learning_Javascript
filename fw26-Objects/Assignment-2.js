let object=
  [
{
    grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
  },
{
	  grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
      },
{
    grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
      ]
      
}
    ];

for(let i=0;i<object.length;i++)
  {
    let max=0;
    // console.log(object[0]);
    for(let j=0;j<object[i].students.length;j++)
      {
        // console.log(object[i].students[j]);
        let sum=0;
        for(let k=0;k<object[i].students[j].marks.length;k++)
          {
            sum+=object[i].students[j].marks[k];
          }
        if(sum>=90)
        {
          max=sum;
          console.log(object[i].grade+"-"+object[i].students[j].name+"-"+max);
        }
        
      }
  }