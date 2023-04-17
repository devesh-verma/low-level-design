import StudentBuilder from "./StudentBuilder";
import EngineeringStudentBuilder from "./EngineeringStudentBuilder";
import MBAStudentBuilder from "./MBAStudentBuilder";
import Student from "./Student";

class Director {
    studentBuilder: StudentBuilder;

    constructor(studentBuilder: StudentBuilder) {
        this.studentBuilder = studentBuilder;
    }

    createStudent(): Student{
        if(this.studentBuilder instanceof EngineeringStudentBuilder){
            return this.createEngineeringStudent();
        } else {
            return this.createMbaStudent();
        }
    }

    createEngineeringStudent(): Student{
        return this.studentBuilder.setname("Devesh").setrollNo(1).setage(27).setSubjects().build()
    }

    createMbaStudent(): Student{
        return this.studentBuilder.setname("Harsh").setrollNo(2).setage(26).setSubjects().build()
    }
}

export default  Director;