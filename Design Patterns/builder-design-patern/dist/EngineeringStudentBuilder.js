"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StudentBuilder_1 = __importDefault(require("./StudentBuilder"));
class EngineeringStudentBuilder extends StudentBuilder_1.default {
    setSubjects() {
        this.subjects = ["OS", "CN", "DM", "GT", "DSA", "FAFL"];
        return this;
    }
}
exports.default = EngineeringStudentBuilder;
