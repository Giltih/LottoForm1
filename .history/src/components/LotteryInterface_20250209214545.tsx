import React, { useState } from 'react';
import { Trash2, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import '../App.css';


interface LotteryTable {
  regular: (number | null)[];
  strong: number | null;
}

const LotteryInterface: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<number>(1);
  const [tables, setTables] = useState<LotteryTable[]>(
    Array.from({ length: 14 }, () => ({
      regular: Array(6).fill(null) as (number | null)[],
      strong: null,
    }))
  );
  const [selectedRaffles, setSelectedRaffles] = useState<number>(1);

  const BASE_PRICE = 11.90;

  const calculateTotalPrice = (raffles: number): string => {
    return (BASE_PRICE * raffles).toFixed(2);
  };

  const handleRaffleSelection = (count: number): void => {
    setSelectedRaffles(count);
  };

  const isNumberSelected = (
    tableIndex: number,
    num: number,
    isStrong: boolean = false
  ): boolean => {
    const table = tables[tableIndex];
    if (isStrong) {
      return table.strong === num;
    }
    return table.regular.includes(num);
  };

  const handleNumberSelection = (
    tableIndex: number,
    num: number,
    isStrong: boolean = false
  ): void => {
    if (isNumberSelected(tableIndex, num, isStrong)) {
      return;
    }

    const newTables = [...tables];
    if (isStrong) {
      newTables[tableIndex].strong = num;
    } else {
      const regularNumbers = newTables[tableIndex].regular;
      const firstEmpty = regularNumbers.indexOf(null);
      if (firstEmpty !== -1) {
        regularNumbers[firstEmpty] = num;
      }
    }
    setTables(newTables);
  };

  const clearTableRow = (tableIndex: number): void => {
    const newTables = [...tables];
    newTables[tableIndex] = {
      regular: Array(6).fill(null) as (number | null)[],
      strong: null,
    };
    setTables(newTables);
  };

  const LeftColumn: React.FC = () => (
    <div className="p-4 h-full bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Number of Raffles</span>
            <HelpCircle className="w-5 h-5 text-blue-500" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[8, 4, 2, 1].map((num) => (
              <button
                key={num}
                onClick={() => handleRaffleSelection(num)}
                className={`p-2 rounded-lg shadow-md transition-all ${
                  selectedRaffles === num
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    : 'bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <span>Extra Option</span>
            <HelpCircle className="w-5 h-5 text-blue-500" />
          </div>
        </div>

        <div className="mt-auto">
          <div className="space-y-2 bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between font-medium">
              <span>Raffles:</span>
              <span>{selectedRaffles}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-blue-700">
              <span>Total:</span>
              <span>₪{calculateTotalPrice(selectedRaffles)}</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all font-medium">
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );

  const MiddleColumn: React.FC = () => (
    <div className="p-4 h-full bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="middle-se">
        {tables.map((table, tableIndex) => (
          <div
            key={tableIndex}
            className={`p-2 rounded-lg cursor-pointer transition-all ${
              selectedTable === tableIndex + 1
                ? 'border-2 border-blue-500 bg-white shadow-lg'
                : 'border border-gray-200 bg-white shadow hover:border-blue-300'
            }`}
            onClick={() => setSelectedTable(tableIndex + 1)}
          >
            <div className="flex items-center space-x-2">
              <span className="w-6 font-medium text-blue-600">
                {tableIndex + 1}
              </span>
              <div className="flex-1 grid grid-cols-7 gap-2">
                {table.regular.map((num, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 border rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 font-medium text-blue-700"
                  >
                    {num}
                  </div>
                ))}
                <div className="w-8 h-8 border rounded-lg flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 font-medium text-yellow-700">
                  {table.strong}
                </div>
              </div>
              <Trash2
                className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  clearTableRow(tableIndex);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const RightColumn: React.FC = () => {
    const regularNumbers: number[] = Array.from({ length: 47 }, (_, i) => i + 1);
    const strongNumbers: number[] = Array.from({ length: 7 }, (_, i) => i + 1);

    const getNumberButtonClass = (
      number: number,
      isStrong: boolean = false
    ): string => {
      const baseClass =
        'w-8 h-8 text-sm rounded-lg shadow transition-all font-medium ';
      const isSelected = isNumberSelected(selectedTable - 1, number, isStrong);

      if (isStrong) {
        return (
          baseClass +
          (isSelected
            ? 'bg-yellow-500 text-white cursor-not-allowed'
            : 'bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 text-yellow-700')
        );
      }

      return (
        baseClass +
        (isSelected
          ? 'bg-blue-500 text-white cursor-not-allowed'
          : 'bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700')
      );
    };

    return (
      <div className="p-4 h-full bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium text-blue-700">
              Regular Numbers (1-47)
            </span>
            <div className="flex space-x-2">
              <ChevronLeft className="w-5 h-5 text-blue-500" />
              <ChevronRight className="w-5 h-5 text-blue-500" />
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {regularNumbers.map((num) => (
              <button
                key={num}
                className={getNumberButtonClass(num)}
                onClick={() => handleNumberSelection(selectedTable - 1, num)}
                disabled={isNumberSelected(selectedTable - 1, num)}
              >
                {num}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <span className="font-medium text-yellow-700">
              Strong Number (1-7)
            </span>
            <div className="grid grid-cols-7 gap-2 mt-2">
              {strongNumbers.map((num) => (
                <button
                  key={num}
                  className={getNumberButtonClass(num, true)}
                  onClick={() =>
                    handleNumberSelection(selectedTable - 1, num, true)
                  }
                  disabled={isNumberSelected(selectedTable - 1, num, true)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 main-grid gap-4 p-4">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </div>
  );
};

export default LotteryInterface;