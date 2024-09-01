import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { calculatorService } from '@/services/calculator.service'
import { CalcHistory } from './history';
import { CalcMemory } from './memory';


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
    memory: [],
    history: [],
  });

  useEffect(() => {
    const initialize = async () => {
      try {
        const userData = await calculatorService.fetchUserData();
        setState((prevState) => ({
          ...prevState,
          history: userData.calculations || [],
          memory: userData.memory || [],
        }));
      } catch (error) {
        console.error('Failed to initialize user data:', error);
      }
    };

    initialize();
  }, []);

  const setCurrentOperand = (operand: string) => {
    setState((prevState) => ({ ...prevState, currentOperand: operand }));
  };

  const setPrevOperand = (operand: string | null) => {
    setState((prevState) => ({ ...prevState, prevOperand: operand }));
  };

  const setCurrentOperation = (operation: string | null) => {
    setState((prevState) => ({ ...prevState, currentOperation: operation }));
  };

  const addHistory = async (entry: CalcHistory) => {
    try {
      const savedEntry = await calculatorService.saveHistory(entry);
      setState((prevState) => ({
        ...prevState,
        history: [savedEntry, ...prevState.history],
      }));
    } catch (error) {
      console.error('Failed to add history:', error);
    }
  };

  const clearHistory = () => {
    setState((prevState) => ({ ...prevState, history: [] }));
  };

  const addMemory = async (entry: CalcMemory) => {
    try {
      const savedEntry = await calculatorService.saveMemory(entry);
      setState((prevState) => ({
        ...prevState,
        memory: [savedEntry, ...prevState.memory],
      }));
    } catch (error) {
      console.error('Failed to add memory:', error);
    }
  };

  const updateMemory = async (entry: CalcMemory) => {
    try {
      const savedEntry = await calculatorService.updateMemory(entry);
      setState((prevState) => {
        const updatedMemory = [...prevState.memory];
        for (let i = 0; i < updatedMemory.length; i++) {
          if (updatedMemory[i].id === entry.id) {
            updatedMemory[i] = entry;
            break;
          }
        }

        return { ...prevState, memory: updatedMemory };
      });
    } catch (error) {
      console.error('Failed to update memory:', error);
    }
  };

  const deleteMemory = async (entry: CalcMemory) => {
    let deleted = await calculatorService.deleteMemory(entry);
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
        deleteMemory,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
