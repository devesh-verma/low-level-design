import StudentBuilder from "./StudentBuilder";

class Student {
    rollNo: number;
    name: string;
    age: number;
    subjects: string[];


    constructor(studentBuilder: StudentBuilder) {
        this.rollNo = studentBuilder.rollNo;
        this.name = studentBuilder.name;
        this.age = studentBuilder.age;
        this.subjects = studentBuilder.subjects;
    }
}

export default Student;