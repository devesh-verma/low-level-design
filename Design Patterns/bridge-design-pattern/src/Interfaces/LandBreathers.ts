import IBreathingImplementor from "./IBreathingImplementor";

class LandBreathers implements IBreathingImplementor{
    breath(): string {
        return "Land breathers";
    }
}

export default LandBreathers;