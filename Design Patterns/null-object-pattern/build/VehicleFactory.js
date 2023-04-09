"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const NullVehicle_1 = __importDefault(require("./NullVehicle"));
class VehicleFactory {
    getVehicleObject(vehicleType) {
        if (vehicleType === "Car") {
            return new Car_1.default();
        }
        return new NullVehicle_1.default();
    }
}
exports.default = VehicleFactory;
