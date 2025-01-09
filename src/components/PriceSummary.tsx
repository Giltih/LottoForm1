import React from 'react';

interface Props {
  tables: number;
  draws: number;
  isExtraSelected: boolean;
}

const PriceSummary: React.FC<Props> = ({ tables, draws, isExtraSelected }) => {
  const pricePerTable = 5.9;
  const extraPrice = isExtraSelected ? 2.0 : 0.0;
  const totalPrice = (tables * pricePerTable + extraPrice) * draws;

  return (
    <div>
      <h3>סיכום מחיר</h3>
      <p>טבלאות: {tables}</p>
      <p>הגרלות: {draws}</p>
      <p>EXTRA: {isExtraSelected ? 'כן' : 'לא'}</p>
      <p style={{ fontWeight: 'bold' }}>לתשלום: {totalPrice.toFixed(2)} ₪</p>
    </div>
  );
};

export default PriceSummary;
