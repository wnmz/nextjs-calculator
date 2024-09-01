'use client';
import { useState } from "react";
import { CalcHistory } from "./history";
import { useCalculator } from "./calculatorContext";

interface DisplayProps {
    expression: string;
    value: string;
}

interface DigitButtonProps {
    digit: number | string;
    onClick: (digit: number | string) => void;
    className?: string;
}

interface OperatorButtonProps {
    operator: string;
    onClick: (operator: string) => void;
    className?: string;
}

const Display: React.FC<DisplayProps> = ({ expression, value }) => {
    return (
        <div className="bg-gray-200 rounded-lg p-4 mb-4 text-right font-mono text-black">
            {/* Expression (e.g., Operand Operator Operand) */}
            <div className="text-lg text-gray-600">{expression}</div>
            {/* Current value or result */}
            <div className="text-2xl">{value}</div>
        </div>
    );
};

const DigitButton: React.FC<DigitButtonProps> = ({ digit, onClick, className = "" }) => {
    return (
        <button
            className={`bg-gray-300 p-4 rounded-lg text-lg font-semibold hover:bg-gray-400 ${className}`}
            onClick={() => onClick(digit)}
        >
            {digit}
        </button>
    );
};

const OperatorButton: React.FC<OperatorButtonProps> = ({ operator, onClick, className = "" }) => {
    return (
        <button
            className={`bg-orange-500 p-4 rounded-lg text-lg font-semibold text-white hover:bg-orange-600 ${className}`}
            onClick={() => onClick(operator)}
        >
            {operator}
        </button>
    );
};


const Calculator: React.FC = ({ }) => {
    const {
        state,
        setCurrentOperand,
        setPrevOperand,
        setCurrentOperation,
        addHistory,
        addMemory
    } = useCalculator();

    const [expression, setExpression] = useState<string>("");
    const [isResultCalculated, setIsResultCalculated] = useState<boolean>(false);

    const handleDigitClick = (digit: number | string) => {
        if (isResultCalculated) {
            setCurrentOperand(String(digit));
            setIsResultCalculated(false);
            setExpression((prevExpr) => `${prevExpr} ${state.currentOperand}`);
        } else {
            setCurrentOperand(state.currentOperand === "0" ? String(digit) : state.currentOperand + String(digit));
        }
    };

    const handleMemoryAdd = () => {
        addMemory({
            id: 'unknown',
            number: parseFloat(state.currentOperand)
        })
    }

    const handleDeleteLastChar = () => {
        setCurrentOperand(state.currentOperand.length == 1 ? 
            "0" : state.currentOperand.slice(0, state.currentOperand.length - 1)
        );
    }

    const handleOperatorClick = (operator: string) => {
        if (operator === "C") {
            clearDisplay();
            return;
        }

        if (operator === "=") {
            calculateResult();
            return;
        }

        if (isResultCalculated) {
            setPrevOperand(state.currentOperand);
            setIsResultCalculated(false);
        } else if (state.currentOperation && state.prevOperand !== null) {
            calculateResult();
        } else {
            setPrevOperand(state.currentOperand);
        }

        setCurrentOperation(operator);
        setCurrentOperand("0");
        setExpression(`${state.currentOperand} ${operator}`);
    };

    const clearDisplay = () => {
        setCurrentOperand("0");
        setPrevOperand(null);
        setCurrentOperation(null);
        setExpression("");
        setIsResultCalculated(false);
    };

    const calculateResult = () => {
        if (!state.currentOperation || state.prevOperand === null) return;

        const prev = parseFloat(state.prevOperand);
        const current = parseFloat(state.currentOperand);

        let result;
        switch (state.currentOperation) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                result = prev / current;
                break;
            default:
                return;
        }

        addHistory({
            first_operand: prev,
            second_operand: current,
            operator: state.currentOperation,
            result: result
        })

        setCurrentOperand(String(result));
        setExpression(`${state.prevOperand} ${state.currentOperation} ${state.currentOperand} =`);
        setPrevOperand(String(result));
        setCurrentOperation(null);
        setIsResultCalculated(true);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 w-80">
            {/* Calculator Display */}
            <Display expression={expression} value={state.currentOperand} />

            {/* Calculator Buttons */}
            <div className="grid grid-cols-4 gap-2 min-w-[290px]">
                {/* Clear and Operator Buttons */}
                <OperatorButton
                    operator="C"
                    onClick={handleOperatorClick}
                    className="col-span-1 bg-gray-300 text-black hover:bg-gray-400"
                />

                <OperatorButton operator="←" onClick={handleDeleteLastChar} />
                <OperatorButton operator="M+" onClick={handleMemoryAdd} />
                <OperatorButton operator="/" onClick={handleOperatorClick} />

                {/* Digit Buttons */}
                <DigitButton digit={7} onClick={handleDigitClick} />
                <DigitButton digit={8} onClick={handleDigitClick} />
                <DigitButton digit={9} onClick={handleDigitClick} />
                <OperatorButton operator="*" onClick={handleOperatorClick} />

                <DigitButton digit={4} onClick={handleDigitClick} />
                <DigitButton digit={5} onClick={handleDigitClick} />
                <DigitButton digit={6} onClick={handleDigitClick} />
                <OperatorButton operator="-" onClick={handleOperatorClick} />

                <DigitButton digit={1} onClick={handleDigitClick} />
                <DigitButton digit={2} onClick={handleDigitClick} />
                <DigitButton digit={3} onClick={handleDigitClick} />
                <OperatorButton operator="+" onClick={handleOperatorClick} />

                {/* Zero Button */}
                <DigitButton digit={0} onClick={handleDigitClick} className="col-span-2" />
                <DigitButton digit="." onClick={handleDigitClick} />
                <OperatorButton operator="=" onClick={handleOperatorClick} />
            </div>
        </div>
    );
};

export default Calculator;
