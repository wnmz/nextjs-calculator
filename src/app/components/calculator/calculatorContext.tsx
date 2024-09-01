import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CalcHistory } from './history';

export interface CalcMemory {
  value: number;
  id: string;
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
    memory: [],
    history: [],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setState((prevState) => ({
            ...prevState,
            history: data.data.calculations || [],
            memory: data.data.memory || [],
          }));
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
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
      const response = await fetch('/api/calculation/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });

      if (response.ok) {
        const savedEntry = await response.json();
        setState((prevState) => ({
          ...prevState,
          history: [savedEntry.data, ...prevState.history],
        }));
      } else {
        console.error('Failed to save history:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving history:', error);
    }
  };

  const clearHistory = () => {
    setState((prevState) => ({ ...prevState, history: [] }));
  };

  const addMemory = async (entry: CalcMemory) => {
    try {
      const response = await fetch('/api/calculation/memory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });

      if (response.ok) {
        const savedEntry = await response.json();
        setState((prevState) => ({
          ...prevState,
          memory: [savedEntry.data, ...prevState.memory],
        }));
      } else {
        console.error('Failed to save memory:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving memory:', error);
    }
  };

  const updateMemory = (entry: CalcMemory) => {
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
        deleteMemory,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
