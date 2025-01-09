import React from 'react';

interface NumberTableProps {
  onNumberSelect: (number: number) => void;
  selectedNumbers: number[];
}

const NumberTable: React.FC<NumberTableProps> = ({ onNumberSelect, selectedNumbers }) => {
  return (
    <div>
      <h3>בחר מספרים (1-37):</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '10px' }}>
        {Array.from({ length: 37 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            style={{
              padding: '10px',
              backgroundColor: selectedNumbers.includes(num) ? '#4caf50' : '#f1f1f1',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            onClick={() => onNumberSelect(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberTable;
