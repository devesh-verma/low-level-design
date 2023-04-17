import Humans from "./Abstractions/Humans";
import LandBreathers from "./Interfaces/LandBreathers";
import WaterBreathers from "./Interfaces/WaterBreathers";
import Fish from "./Abstractions/Fish";
import LivingThings from "./Abstractions/LivingThings";

console.log("Bridge design pattern\n--------------");


const human: LivingThings = new Humans(new LandBreathers());
console.log("Breathing process for humans: ", human.breathingProcess())

const fish: LivingThings = new Fish(new WaterBreathers());
console.log("Breathing process for fish: ", fish.breathingProcess())