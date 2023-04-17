"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EngineeringStudentBuilder_1 = __importDefault(require("./EngineeringStudentBuilder"));
class Director {
    constructor(studentBuilder) {
        this.studentBuilder = studentBuilder;
    }
    createStudent() {
        if (this.studentBuilder instanceof EngineeringStudentBuilder_1.default) {
            return this.createEngineeringStudent();
        }
        else {
            return this.createMbaStudent();
        }
    }
    createEngineeringStudent() {
        return this.studentBuilder.setname("Devesh").setrollNo(1).setage(27).setSubjects().build();
    }
    createMbaStudent() {
        return this.studentBuilder.setname("Harsh").setrollNo(2).setage(26).setSubjects().build();
    }
}
exports.default = Director;
