import React from 'react';

interface StrongNumberSelectorProps {
  onStrongNumberSelect: (number: ) => void;
  selectedStrongNumber: number ;
}

const StrongNumberSelector: React.FC<StrongNumberSelectorProps> = ({ onStrongNumberSelect, selectedStrongNumber }) => {
  return (
    <div>
      <h3>בחר מספר חזק (1-7):</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
        {Array.from({ length: 7 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            style={{
              padding: '10px',
              backgroundColor: selectedStrongNumber === num ? '#ff9800' : '#f1f1f1',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            onClick={() => onStrongNumberSelect(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StrongNumberSelector;
