import IBreathingImplementor from "./IBreathingImplementor";

class WaterBreathers implements IBreathingImplementor{
    breath(): string {
        return "Water breathers";
    }
}

export default WaterBreathers;