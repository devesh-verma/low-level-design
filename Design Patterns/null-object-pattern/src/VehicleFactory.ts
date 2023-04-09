import Car from "./Car";
import NullVehicle from "./NullVehicle";

class VehicleFactory {
  getVehicleObject(vehicleType: string) {
    if (vehicleType === "Car") {
      return new Car();
    }
    return new NullVehicle();
  }
}

export default VehicleFactory;
