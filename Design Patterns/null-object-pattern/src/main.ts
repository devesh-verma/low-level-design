import VehicleFactory from "./VehicleFactory";

const vehicleFactory: VehicleFactory = new VehicleFactory();
const car = vehicleFactory.getVehicleObject("Car");
console.log("Car fuel capacity: ", car.getFuelCapacity());
console.log("Car seat capacity: ", car.getSeatingCapacity());

const NullVehicle = vehicleFactory.getVehicleObject("Random");
console.log("NullObject fuel capacity: ", NullVehicle.getFuelCapacity());
console.log("NullObject seat capacity: ", NullVehicle.getSeatingCapacity());
