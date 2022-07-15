let student=[{name:"Abarna", age:31,marks:450},
{name:"Kishore", age:32,marks:435},
{name:"Keerthana",age:31,marks:440},
{name:"Sathya",age:32,marks:432}
];

let result= student.map((element) => {
    element.marks=element.marks+20;
    return element;
});
console.log(result);