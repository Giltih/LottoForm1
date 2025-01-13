
import React, { useState } from "react";
import LottoTables from "./LottoTables";
import LottoSummary from "./LottoSummary";

const Lotto: React.FC = () => {
  const [totalTables, setTotalTables] = useState(2); // ברירת מחדל: 2 טבלאות
  const [selectedDraws, setSelectedDraws] = useState(1); // ברירת מחדל: 1 הגרלה

  const resetForm = () => {
    setTotalTables(2);
    setSelectedDraws(1);
  };

  const fillRandomly = () => {
    console.log("Filling tables randomly...");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lotto App</h1>
      <div>
        <h3>Number of Tables:</h3>
        {[2, 4, 6, 8, 10, 12, 14].map((table) => (
          <button
            key={table}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: totalTables === table ? "#007bff" : "#f0f0f0",
              color: totalTables === table ? "#fff" : "#000",
            }}
            onClick={() => setTotalTables(table)}
          >
            {table}
          </button>
        ))}
      </div>

      <div>
        <h3>Number of Draws:</h3>
        {[1, 2, 4, 8].map((draw) => (
          <button
            key={draw}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: selectedDraws === draw ? "#007bff" : "#f0f0f0",
              color: selectedDraws === draw ? "#fff" : "#000",
            }}
            onClick={() => setSelectedDraws(draw)}
          >
            {draw}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={fillRandomly} style={{ marginRight: "10px" }}>
          🪄 Fill Randomly
        </button>
        <button onClick={resetForm}>Reset Form</button>
      </div>

      {/* <LottoTables totalTables={totalTables} /> */}
      <LottoSummary totalTables={totalTables} selectedDraws={selectedDraws} />
    </div>
  );
};

export default Lotto;
