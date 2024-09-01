'use client';

import { Fragment } from "react";
import { CalcMemory, useCalculator } from "./calculatorContext";
import MemoryItem from "./memoryItem";

export interface CalcHistory {
    operator: string;
    first_operand: number;
    second_operand: number;
    result: number;
}

const Memory: React.FC = () => {
    const { state, updateMemory, deleteMemory } = useCalculator();

    function onMemoryUpdate(mem: CalcMemory) {
        updateMemory(mem)
    }

    function onMemoryDelete(mem: CalcMemory) {
        deleteMemory(mem);
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg mt-4 w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Memory</h2>
            <ul className="space-y-3">
                {state.memory.map((item, index) => (
                  <Fragment key={index}>
                        <MemoryItem 
                             memory={item}
                             onMemoryDelete={onMemoryDelete}
                             onMemoryUpdate={onMemoryUpdate}
                        />
                  </Fragment> 
                ))}
            </ul>
        </div>
    );
};

export default Memory;

