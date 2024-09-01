'use client';

import React from 'react';
import { CalculatorProvider } from './components/calculator/calculatorContext';
import Calculator from './components/calculator/calculator';
import History from './components/calculator/history';
import Memory from './components/calculator/memory';


const Home: React.FC = () => {
  return (
    <CalculatorProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
        <Calculator />
        <History />
        <Memory />
      </div>
    </CalculatorProvider>
  );
};

export default Home;
