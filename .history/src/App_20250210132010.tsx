import React from 'react';
import Header from './components/Header';
import './App.css';
import LotteryInterface from './components/LotteryInterface';
 
const App: React.FC = () => {

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
