import React, { useState } from "react";

interface LottoTableProps {
  tableNumber: number;
}

const LottoTable: React.FC<LottoTableProps> = ({ tableNumber }) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [strongNumber, setStrongNumber] = useState<number | null>(null);

  const toggleNumber = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  return (
    <div style={{ margin: "20px 0", border: "1px solid #ccc", padding: "10px" }}>
      <h4>Table {tableNumber}</h4>
      <div>
        {[...Array(37)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => toggleNumber(i + 1)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: selectedNumbers.includes(i + 1) ? "#007bff" : "#f0f0f0",
              color: selectedNumbers.includes(i + 1) ? "#fff" : "#000",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <h4>Strong Number:</h4>
        {[...Array(7)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setStrongNumber(i + 1)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: strongNumber === i + 1 ? "red" : "#f0f0f0",
              color: strongNumber === i + 1 ? "#fff" : "#000",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LottoTable;