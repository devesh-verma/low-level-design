"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("./Student"));
class StudentBuilder {
    setrollNo(value) {
        this.rollNo = value;
        return this;
    }
    setname(value) {
        this.name = value;
        return this;
    }
    setage(value) {
        this.age = value;
        return this;
    }
    build() {
        return new Student_1.default(this);
    }
}
exports.default = StudentBuilder;
