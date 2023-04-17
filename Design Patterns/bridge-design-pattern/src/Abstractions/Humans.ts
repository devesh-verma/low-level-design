import LivingThings from "./LivingThings";
import IBreathingImplementor from "../Interfaces/IBreathingImplementor";

class Humans extends LivingThings{

    constructor(breathingImplementor: IBreathingImplementor) {
        super(breathingImplementor);
    }
    breathingProcess(): string {
        return this.breathingImplementor.breath();
    }
}

export default Humans;