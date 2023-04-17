import LivingThings from "./LivingThings";
import IBreathingImplementor from "../Interfaces/IBreathingImplementor";

class Fish extends LivingThings {
    constructor(breathingImplementor: IBreathingImplementor) {
        super(breathingImplementor);
    }

    breathingProcess():string {
        return this.breathingImplementor.breath();
    }
}

export default Fish;