"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(studentBuilder) {
        this.rollNo = studentBuilder.rollNo;
        this.name = studentBuilder.name;
        this.age = studentBuilder.age;
        this.subjects = studentBuilder.subjects;
    }
}
exports.default = Student;
