import Vehicle from "./Vehicle";

class NullVehicle implements Vehicle {
  getFuelCapacity(): number {
    return 0;
  }
  getSeatingCapacity(): number {
    return 0;
  }
}
export default NullVehicle;
