"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(studentBuilder) {
        this.rollNo = studentBuilder.rollNo;
        this.name = studentBuilder.name;
        this.age = studentBuilder.age;
        this.fathersName = studentBuilder.fathersName;
        this.mothersName = studentBuilder.mothersName;
    }
}
exports.default = Student;
