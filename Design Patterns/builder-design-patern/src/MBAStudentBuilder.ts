import StudentBuilder from "./StudentBuilder";

class MBAStudentBuilder extends StudentBuilder{
    setSubjects(): StudentBuilder {
        this.subjects = ["MBA1","MBA2","MBA3"];
        return this;
    }
}

export default MBAStudentBuilder;