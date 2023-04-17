import Director from "./Director";
import EngineeringStudentBuilder from "./EngineeringStudentBuilder";
import Student from "./Student";
import MBAStudentBuilder from "./MBAStudentBuilder";

console.log("builder design pattern");

const engineeringDirector: Director = new Director(new EngineeringStudentBuilder())
const engStudent1: Student = engineeringDirector.createStudent()
console.log({engStudent1});

const MbaDirector: Director = new Director(new MBAStudentBuilder())
const mbaStudent1: Student = MbaDirector.createStudent()
console.log({mbaStudent1});