import CNumber from "./CNumber";
import ArithmaticExpression, {operations} from "./ArithmaticExpression";

console.log("Hello world");

const num1: CNumber = new CNumber(5);
const ax1: ArithmaticExpression = new ArithmaticExpression(num1, num1, operations.ADDITION);
const ax2: ArithmaticExpression = new ArithmaticExpression(ax1, num1, operations.SUBTRACTION);
const ax3: ArithmaticExpression = new ArithmaticExpression(ax2, num1, operations.DIVISION);
const ax4: ArithmaticExpression = new ArithmaticExpression(ax3, num1, operations.MULTIPLICATION);

console.log({ax4: ax4.execute()});