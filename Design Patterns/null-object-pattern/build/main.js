"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleFactory_1 = __importDefault(require("./VehicleFactory"));
const vehicleFactory = new VehicleFactory_1.default();
const car = vehicleFactory.getVehicleObject("Car");
console.log("Car fuel capacity: ", car.getFuelCapacity());
console.log("Car seat capacity: ", car.getSeatingCapacity());
const NullVehicle = vehicleFactory.getVehicleObject("Random");
console.log("NullObject fuel capacity: ", NullVehicle.getFuelCapacity());
console.log("NullObject seat capacity: ", NullVehicle.getSeatingCapacity());
