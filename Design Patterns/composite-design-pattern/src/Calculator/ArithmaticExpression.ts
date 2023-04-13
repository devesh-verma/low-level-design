import Execute from "./Execute";
import CNumber from "./CNumber";

export enum operations {
    ADDITION = "ADDITION",
    SUBTRACTION = "SUBTRACTION",
    MULTIPLICATION = "MULTIPLICATION",
    DIVISION = "DIVISION",

}

class ArithmaticExpression implements Execute{
    operand1: Execute;
    operand2: Execute;
    operation: operations;


    constructor(operand1: Execute, operand2: Execute, operation: operations) {
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operation = operation;
    }

    execute(): number {
        switch (this.operation) {
            case operations.ADDITION:{
                return this.operand1.execute() + this.operand2.execute();
            }
            case operations.SUBTRACTION:{
                return this.operand1.execute() - this.operand2.execute();
            }
            case operations.MULTIPLICATION:{
                return this.operand1.execute() * this.operand2.execute();
            }
            case operations.DIVISION:{
                return this.operand1.execute() / this.operand2.execute();
            }
        }
        return -1;
    }
}

export default ArithmaticExpression