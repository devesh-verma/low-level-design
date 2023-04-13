import Execute from "./Execute";

class CNumber implements Execute {
    num: number
    constructor(num: number) {
        this.num = num;
    }
    execute(): number {
        return this.num;
    }
}

export default CNumber;