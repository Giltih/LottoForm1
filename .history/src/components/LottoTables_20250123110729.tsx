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
          <div className='numbersGrid'>
            {numbers.map((number) => (
              <button
                key={number}
                
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
