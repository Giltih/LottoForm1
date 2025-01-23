import React from 'react';

interface Props {
  tableCount: number;
  selectedNumbers: number[][];
  onNumberSelect: (tableIndex: number, number: number) => void;
}

const LottoTables: React.FC<Props> = ({ tableCount, selectedNumbers, onNumberSelect }) => {
  const numbers = Array.from({ length: 37 }, (_, i) => i + 1); // מספרים 1-37

  return (
    <div>
      <h3>טבלאות לוטו</h3>
      {Array.from({ length: tableCount }, (_, tableIndex) => (
        <div key={tableIndex} style={{ marginBottom: '20px' }}>
          <h4>טבלה {tableIndex + 1}</h4>
          <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: '5px' }}>
            {numbers.map((number) => (
              <button
                key={number}
                style={{
                  padding: '10px',
                  backgroundColor: selectedNumbers[tableIndex]?.includes(number)
                    ? '#90caf9'
                    : '#e0e0e0',
                }}
                onClick={() => onNumberSelect(tableIndex, number)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LottoTables;
