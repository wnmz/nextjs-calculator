import React from 'react';
import { CalcMemory } from './memory';
import { useCalculator } from './calculatorContext';

export interface MemoryProps {
  memory: CalcMemory;
  onMemoryUpdate: (mem: CalcMemory) => void;
  onMemoryDelete: (mem: CalcMemory) => void;
}

const MemoryItem: React.FC<MemoryProps> = ({ memory, onMemoryUpdate, onMemoryDelete }) => {
  const {state} = useCalculator();

  const onMemoryClear = () => {
    onMemoryDelete(memory);
  }

  const onMemoryAdd = () => {
    onMemoryUpdate({
      ...memory,
      value: memory.value + parseFloat(state.currentOperand)
    })
  }

  const onMemorySubtract = () => {
    onMemoryUpdate({
      ...memory,
      value: memory.value - parseFloat(state.currentOperand)
    })
  }

  return (
    <div className="bg-gray-50 p-2 rounded-lg mt-1">
      <div className="text-lg font-bold text-gray-800 text-right mb-1">{String(memory.value)}</div>
      <div className="flex justify-between">
        <button
          className="bg-orange-400 p-2 rounded-lg text-sm font-semibold text-white hover:bg-orange-300"
          onClick={onMemoryClear}
        >
          MC
        </button>
        <button
          className="bg-orange-400 p-2 rounded-lg text-sm font-semibold text-white hover:bg-orange-300"
          onClick={onMemoryAdd}
        >
          M+
        </button>
        <button
          className="bg-orange-400 p-2 rounded-lg text-sm font-semibold text-white hover:bg-orange-300"
          onClick={onMemorySubtract}
        >
          M-
        </button>
      </div>
    </div>
  );
};

export default MemoryItem;
