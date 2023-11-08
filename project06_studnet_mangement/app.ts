class School {
    name: string;
    student:Student[]=[]
    teacher:Teacher[]= []
    addStudent(stdobj:Student){
        this.student.push(stdobj) 
    }
    addTeacher(teachobj:Teacher){
        this.student.push(teachobj) 
    }
    constructor(name:string){
        this.name=name;
    }
}
class Student {
name:string;
age:number;
schollName:string;
constructor(name:string,age:number,scholl:string){
    this.name=name;
    this.age=age;
    this.schollName=scholl;
}
}
class Teacher extends Student{}

let school1 = new School("Boys School Tando soomro")
let scholl2 = new School("Girls School Tando Soomro")
let std1 = new Student("Ajmal",32,school1.name)
let std2 = new Student("Tumazir",23,scholl2.name)
school1.addStudent(std1)
scholl2.addStudent(std2)