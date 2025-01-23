import React, { useState } from 'react';
import Header from './components/Header';
import LotteryAmountSelector from './components/LotteryAmountSelector';
import ExtraOption from './components/ExtraOption';
import StrongNumberSelector from './components/StrongNumberSelector';
import LottoForm from
import PriceSummary from './components/PriceSummary';
import './App.css';
 
const App: React.FC = () => {
  const tableCount = 2;
  // const [tableCount, setTableCount] = useState(2);
  const [draws, setDraws] = useState(1);
  const [isExtraSelected, setIsExtraSelected] = useState(false);
  const [strongNumber, setStrongNumber] = useState<number>(0);
  const [selectedNumbers, setSelectedNumbers] = useState<number[][]>(
    Array(14).fill([]) 
  );

  const handleNumberSelect = (tableIndex: number, number: number) => {
    const newSelectedNumbers = [...selectedNumbers];
    const tableNumbers = newSelectedNumbers[tableIndex] || [];

    if (tableNumbers.includes(number)) {
      newSelectedNumbers[tableIndex] = tableNumbers.filter((num) => num !== number);
    } else if (tableNumbers.length < 6) {
      newSelectedNumbers[tableIndex] = [...tableNumbers, number];
    }

    setSelectedNumbers(newSelectedNumbers);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div className="left-section">
          <LotteryAmountSelector selectedDraws={draws} onChange={setDraws} />
          <ExtraOption isSelected={isExtraSelected} onChange={setIsExtraSelected} />
          <StrongNumberSelector selectedStrongNumber={strongNumber} onStrongNumberSelect={setStrongNumber} />
          <PriceSummary tables={tableCount} draws={draws} isExtraSelected={isExtraSelected} />
        </div>
        <div className="right-section">
          <LottoTables
            tableCount={tableCount}
            selectedNumbers={selectedNumbers}
            onNumberSelect={handleNumberSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
