import React from "react";

interface LottoSummaryProps {
  totalTables: number;
  selectedDraws: number;
}

const LottoSummary: React.FC<LottoSummaryProps> = ({ totalTables, selectedDraws }) => {
  const calculatePrice = () => {
    const pricePerTable = 5;
    return totalTables * selectedDraws * pricePerTable;
  };

  return (
    <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px"}}>
      <h3>לתשלום</h3>
      <p>טבלאות: {totalTables}</p>
      <p>הגרלות: {selectedDraws}</p>
      <p>לתשלום: {calculatePrice()}₪</p>
    </div>
  );
};

export default LottoSummary;