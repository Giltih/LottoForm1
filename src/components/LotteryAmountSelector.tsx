import React from 'react';

interface Props {
  selectedDraws: number;
  onChange: (count: number) => void;
}

const LotteryAmountSelector: React.FC<Props> = ({ selectedDraws, onChange }) => {
  const options = [1, 2, 4, 8]; 

  return (
    <div>
      <h3>מספר הגרלות</h3>
      {options.map((count) => (
        <label key={count} style={{ marginRight: '10px' }}>
          <input
            type="radio"
            value={count}
            checked={selectedDraws === count}
            onChange={() => onChange(count)}
          />
          {count}
        </label>
      ))}
    </div>
  );
};

export default LotteryAmountSelector;
