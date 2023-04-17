import Student from "./Student";

abstract class StudentBuilder {
    rollNo!: number;
    name!: string;
    age!: number;
    subjects!: string[];


    setrollNo(value: number): StudentBuilder {
        this.rollNo = value;
        return this;
    }

    setname(value: string): StudentBuilder {
        this.name = value;
        return this;
    }

    setage(value: number): StudentBuilder {
        this.age = value;
        return this;
    }

    abstract setSubjects(): StudentBuilder;

    build(): Student{
        return new Student(this)
    }
}

export default StudentBuilder;