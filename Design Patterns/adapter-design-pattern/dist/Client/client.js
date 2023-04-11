"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WeighingMachineAdapter_1 = __importDefault(require("../Adapter/WeighingMachineAdapter"));
const weighingMachineAdapter = new WeighingMachineAdapter_1.default();
console.log("Weight in KGs: ", weighingMachineAdapter.measureWeight());
