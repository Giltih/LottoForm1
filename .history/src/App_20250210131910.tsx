import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import LotteryInterface from './components/LotteryInterface';
 


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
        <LotteryInterface />
        {/* <div className="left-section">
          <LotteryAmountSelector selectedDraws={draws} onChange={setDraws} />
          <ExtraOption isSelected={isExtraSelected} onChange={setIsExtraSelected} />
          <StrongNumberSelector selectedStrongNumber={strongNumber} onStrongNumberSelect={setStrongNumber} />
          <PriceSummary tables={tableCount} draws={draws} isExtraSelected={isExtraSelected} />
        </div>
        <div className='middle-section'>vibe</div>
        <div className="right-section">
          <LottoForm
            tableCount={tableCount}
            selectedNumbers={selectedNumbers}
            onNumberSelect={handleNumberSelect}
          />
        </div> */}
      </div>
  );
};

export default App;
