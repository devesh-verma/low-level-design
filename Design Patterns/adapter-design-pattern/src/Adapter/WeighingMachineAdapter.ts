import IWeighingMachineAdapter from "./IWeighingMachineAdapter";
import WeighingMachine from "../Adaptee/WeighingMachine";

class WeighingMachineAdapter implements IWeighingMachineAdapter {
    private weighingMachine: WeighingMachine;
    constructor() {
        this.weighingMachine = new WeighingMachine()
    }
    measureWeight(): number {
        const weightInKg = this.weighingMachine.measureWeight();
        return Number((weightInKg * .28).toFixed(2));
    }
}

export default WeighingMachineAdapter;