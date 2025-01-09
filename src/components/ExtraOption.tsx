import React from 'react';

interface Props {
  isSelected: boolean;
  onChange: (selected: boolean) => void;
}

const ExtraOption: React.FC<Props> = ({ isSelected, onChange }) => {
  return (
    <div>
      <h3>Extra</h3>
      <label>
        <input type="checkbox" checked={isSelected} onChange={(e) => onChange(e.target.checked)} />
        תוספת EXTRA
      </label>
    </div>
  );
};

export default ExtraOption;
