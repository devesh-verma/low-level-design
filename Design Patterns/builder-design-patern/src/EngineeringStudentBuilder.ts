import StudentBuilder from "./StudentBuilder";

class EngineeringStudentBuilder extends StudentBuilder{
    setSubjects(): StudentBuilder {
        this.subjects = ["OS","CN","DM", "GT", "DSA", "FAFL"]
        return this;
    }
}

export default EngineeringStudentBuilder;