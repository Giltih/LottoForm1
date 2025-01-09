import React from 'react';

interface Props {
  tableCount: number;
  onChange: (count: number) => void;
}

const TableSelector: React.FC<Props> = ({ tableCount, onChange }) => {
  const options = Array.from({ length: 13 }, (_, i) => i + 2); // אפשרויות בין 2 ל-14

  return (
    <div>
      <h3>בחר מספר טבלאות</h3>
      <select value={tableCount} onChange={(e) => onChange(Number(e.target.value))}>
        {options.map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TableSelector;
