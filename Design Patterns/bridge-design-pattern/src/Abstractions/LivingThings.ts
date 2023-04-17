import IBreathingImplementor from "../Interfaces/IBreathingImplementor";

abstract class LivingThings {
    breathingImplementor: IBreathingImplementor;

    protected constructor(breathingImplementor: IBreathingImplementor) {
        this.breathingImplementor = breathingImplementor;
    }

    public abstract breathingProcess() : string;
}

export default LivingThings;