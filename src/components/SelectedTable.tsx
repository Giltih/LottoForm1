import React from 'react';

interface SelectedTableProps {
  rows: number[][];
}

const SelectedTable: React.FC<SelectedTableProps> = ({ rows }) => {
  return (
    <div>
      <h3>המספרים שנבחרו:</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((num, i) => (
                <td
                  key={i}
                  style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    backgroundColor: i === row.length - 1 ? '#ff9800' : '#fff',
                  }}
                >
                  {num}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedTable;
