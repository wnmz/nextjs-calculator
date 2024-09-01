'use client';

import { useCalculator } from "./calculatorContext";

export interface CalcHistory {
    operator: string;
    first_operand: number;
    second_operand: number;
    result: number;
}

const History: React.FC = () => {
    const { state } = useCalculator();

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            {/* <h2 className="text-xl font-semibold mb-4 text-gray-800">History</h2> */}
            <ul className="space-y-3 overflow-y-auto max-h-[400px]">
                {state.history.map((item, index) => (
                    <li key={index} className="bg-gray-50 p-3 rounded-md shadow-sm">
                        <div className="text-sm text-gray-600 text-right">
                            {item.first_operand} {item.operator} {item.second_operand} =
                        </div>
                        <div className="text-lg font-bold text-gray-800 text-right">
                            {item.result}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;

