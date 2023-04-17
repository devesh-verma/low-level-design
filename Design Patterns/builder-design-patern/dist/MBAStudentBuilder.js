"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StudentBuilder_1 = __importDefault(require("./StudentBuilder"));
class MBAStudentBuilder extends StudentBuilder_1.default {
    setSubjects() {
        this.subjects = ["MBA1", "MBA2", "MBA3"];
        return this;
    }
}
exports.default = MBAStudentBuilder;
