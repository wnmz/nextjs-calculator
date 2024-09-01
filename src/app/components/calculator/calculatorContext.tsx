import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CalcHistory } from './history';

export interface CalcMemory {
  number: number,
  id: string
}

export interface CalculatorState {
  currentOperand: string;
  prevOperand: string | null;
  currentOperation: string | null;
  memory: CalcMemory[];
  history: CalcHistory[];
}

export interface CalculatorContextType {
  state: CalculatorState;
  setCurrentOperand: (operand: string) => void;
  setPrevOperand: (operand: string | null) => void;
  setCurrentOperation: (operation: string | null) => void;
  addHistory: (entry: CalcHistory) => void;
  clearHistory: () => void;
  updateMemory: (entry: CalcMemory) => void;
  addMemory: (entry: CalcMemory) => void;
  deleteMemory: (entry: CalcMemory) => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<CalculatorState>({
    currentOperand: '0',
    prevOperand: null,
    currentOperation: null,
    memory: [{
      id: '123',
      number: 4
    }],
    history: [],
  });

  const setCurrentOperand = (operand: string) => {
    setState((prevState) => ({ ...prevState, currentOperand: operand }));
  };

  const setPrevOperand = (operand: string | null) => {
    setState((prevState) => ({ ...prevState, prevOperand: operand }));
  };

  const setCurrentOperation = (operation: string | null) => {
    setState((prevState) => ({ ...prevState, currentOperation: operation }));
  };

  const addHistory = (entry: CalcHistory) => {
    setState((prevState) => ({ ...prevState, history: [entry, ...prevState.history] }));
  };

  const clearHistory = () => {
    setState((prevState) => ({ ...prevState, history: [] }));
  };

  const addMemory = (entry: CalcMemory) => {
    setState((prevState) => ({ ...prevState, memory: [entry, ...prevState.memory] }));
  }

  const updateMemory = (entry: CalcMemory) => {
    setState((prevState) => {
      const updatedMemory = [...prevState.memory];
      for(let i = 0; i < updatedMemory.length; i++) {
        if(updatedMemory[i].id == entry.id) {
          updatedMemory[i] = entry;
          break;
        }
      }
      
      return { ...prevState, memory: updatedMemory };
    });
  };

  const deleteMemory = (entry: CalcMemory) => {
    setState((prevState) => {
      const updatedMemory = prevState.memory.filter((mem) => entry.id !== mem.id);
      return { ...prevState, memory: updatedMemory };
    });
  };



  return (
    <CalculatorContext.Provider
      value={{
        state,
        setCurrentOperand,
        setPrevOperand,
        setCurrentOperation,
        addHistory,
        clearHistory,
        addMemory,
        updateMemory,
        deleteMemory
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
