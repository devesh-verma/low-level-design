import Vehicle from "./Vehicle";

class Car implements Vehicle {
  getFuelCapacity(): number {
    return 40;
  }
  getSeatingCapacity(): number {
    return 5;
  }
}

export default Car;
