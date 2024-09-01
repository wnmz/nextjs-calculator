'use client';

import React, { useState } from 'react';
import { CalculatorProvider } from './components/calculator/calculatorContext';
import Calculator from './components/calculator/calculator';
import History from './components/calculator/history';
import Memory from './components/calculator/memory';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'history' | 'memory'>('history');

  return (
    <CalculatorProvider>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-black">
        <div className="flex flex-col md:items-end items-center mt-2 justify-start w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <Calculator />
        </div>

        {/* Pages Section */}
        <div className="flex flex-col w-full md:w-1/2 p-4">
          {/* Tabs for Switching Between History and Memory */}
          <div className="flex space-x-4 mb-4 justify-center md:justify-normal">
            <button
              className={`px-4 py-2 text-lg font-semibold ${
                activeTab === 'history' ? 'border-b-2 border-blue-500 ' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab('history')}
            >
              Журнал
            </button>
            <button
              className={`px-4 py-2 text-lg font-semibold ${
                activeTab === 'memory' ? 'border-b-2 border-blue-500 ' : 'text-gray-400'
              }`}
              onClick={() => setActiveTab('memory')}
            >
              Память
            </button>
          </div>

          {/* Conditional Rendering of History and Memory */}
          <div className="scrollbar-none flex justify-center md:justify-normal min-w-80 overflow">
            {activeTab === 'history' && <History />}
            {activeTab === 'memory' && <Memory />}
          </div>
        </div>
      </div>
    </CalculatorProvider>
  );
};

export default Home;
