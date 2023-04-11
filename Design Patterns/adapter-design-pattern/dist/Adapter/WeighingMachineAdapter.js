"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WeighingMachine_1 = __importDefault(require("../Adaptee/WeighingMachine"));
class WeighingMachineAdapter {
    constructor() {
        this.weighingMachine = new WeighingMachine_1.default();
    }
    measureWeight() {
        const weightInKg = this.weighingMachine.measureWeight();
        return Number((weightInKg * .28).toFixed(2));
    }
}
exports.default = WeighingMachineAdapter;
