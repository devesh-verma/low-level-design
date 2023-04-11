import IWeighingMachine from "./IWeighingMachine";

class WeighingMachine implements IWeighingMachine {
    measureWeight(): number {
        return 20;
    }
}

export default WeighingMachine;