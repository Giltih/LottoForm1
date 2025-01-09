import React from 'react';

interface Props {
  selectedType: string;
  onChange: (type: string) => void;
}

const LotteryTypeSelector: React.FC<Props> = ({ selectedType, onChange }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: selectedType === 'regular' ? '#ffeb3b' : '#fff' }}
        onClick={() => onChange('regular')}
      >
        לוטו רגיל
      </button>
      <button
        style={{ backgroundColor: selectedType === 'double' ? '#ffeb3b' : '#fff' }}
        onClick={() => onChange('double')}
      >
        דאבל לוטו
      </button>
      <button
        style={{ backgroundColor: selectedType === 'systematic' ? '#ffeb3b' : '#fff' }}
        onClick={() => onChange('systematic')}
      >
        לוטו שיטתי
      </button>
    </div>
  );
};

export default LotteryTypeSelector;
