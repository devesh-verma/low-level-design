"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Director_1 = __importDefault(require("./Director"));
const EngineeringStudentBuilder_1 = __importDefault(require("./EngineeringStudentBuilder"));
const MBAStudentBuilder_1 = __importDefault(require("./MBAStudentBuilder"));
console.log("builder design pattern");
const engineeringDirector = new Director_1.default(new EngineeringStudentBuilder_1.default());
const engStudent1 = engineeringDirector.createStudent();
console.log({ engStudent1 });
const MbaDirector = new Director_1.default(new MBAStudentBuilder_1.default());
const mbaStudent1 = MbaDirector.createStudent();
console.log({ mbaStudent1 });
