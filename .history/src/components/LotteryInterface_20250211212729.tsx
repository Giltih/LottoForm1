import React, { useState } from "react";
import { Trash2, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/Card";
import "../Lottery.css";

interface TableData {
  regular: (number | null)[];
  strong: number | null;
}
//new interface//
interface ColumnProps {
  selectedTable?: number;
  selectedRaffles?: number;
  tables?: TableData[];
  handleRaffleSelection?: (count: number) => void;
  setSelectedTable?: (table: number) => void;
  clearTableRow?: (index: number) => void;
  handleNumberSelection?: (
    tableIndex: number,
    number: number,
    isStrong?: boolean
  ) => void;
  isNumberSelected?: (
    tableIndex: number,
    number: number,
    isStrong?: boolean
  ) => boolean;
}

const LotteryInterface: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<number>(1);
  const [tables, setTables] = useState<TableData[]>(
    Array(14)
      .fill(null)
      .map(() => ({
        regular: Array(6).fill(null),
        strong: null,
      }))
  );
  const [selectedRaffles, setSelectedRaffles] = useState<number>(1);

  const BASE_PRICE: number = 11.9;

  const calculateTotalPrice = (raffles: number): string => {
    return (BASE_PRICE * raffles).toFixed(2);
  };

  const handleRaffleSelection = (count: number): void => {
    setSelectedRaffles(count);
  };

  const isNumberSelected = (
    tableIndex: number,
    number: number,
    isStrong: boolean = false
  ): boolean => {
    const table = tables[tableIndex];
    if (isStrong) {
      return table.strong === number;
    }
    return table.regular.includes(number);
  };

  const handleNumberSelection = (
    tableIndex: number,
    number: number,
    isStrong: boolean = false
  ): void => {
    const newTables = [...tables];
    if (isNumberSelected(tableIndex, number, isStrong)) {
      if(isStrong){
        newTables[tableIndex].strong=null
      }
      else{
        const index = (
          newTables[tableIndex].regular.
        )
      }
    }

    if (isStrong) {
      newTables[tableIndex].strong = number;
    } else {
      const regularNumbers = newTables[tableIndex].regular;
      const firstEmpty = regularNumbers.indexOf(null);
      if (firstEmpty !== -1) {
        regularNumbers[firstEmpty] = number;
      }
    }
    setTables([...newTables]);
  };

  const clearTableRow = (tableIndex: number): void => {
    const newTables = [...tables];
    newTables[tableIndex] = {
      regular: Array(6).fill(null),
      strong: null,
    };
    setTables([...newTables]);
  };

  const LeftColumn: React.FC<ColumnProps> = () => (
    <Card className="left-column">
      <div className="left-column-content">
        <div className="raffle-selector">
          <div className="raffle-header">
            <span className="font-medium">Number of Raffles</span>
            <HelpCircle className="help-icon" />
          </div>
          <div className="raffle-buttons">
            {[8, 4, 2, 1].map((num) => (
              <button
                key={num}
                onClick={() => handleRaffleSelection(num)}
                className={`raffle-button ${
                  selectedRaffles === num ? "selected" : ""
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="extra-option">
          <div className="extra-option-header">
            <span>Extra Option</span>
            <HelpCircle className="help-icon" />
          </div>
        </div>

        <div className="summary-section">
          <div className="price-summary">
            <div className="summary-row">
              <span>Raffles:</span>
              <span>{selectedRaffles}</span>
            </div>
            <div className="total-row">
              <span>Total:</span>
              <span>₪{calculateTotalPrice(selectedRaffles)}</span>
            </div>
          </div>
          <button className="submit-button">Submit Form</button>
        </div>
      </div>
    </Card>
  );

  const MiddleColumn: React.FC<ColumnProps> = () => (
    <Card className="middle-column">
      <div className="table-list">
        {tables.map((table, tableIndex) => (
          <div
            key={tableIndex}
            className={`table-row ${
              selectedTable === tableIndex + 1 ? "selected" : ""
            }`}
            onClick={() => setSelectedTable(tableIndex + 1)}
          >
            <div className="table-row-content">
              <span className="table-number">{tableIndex + 1}</span>
              <div className="number-grid">
                {table.regular.map((num, i) => (
                  <div key={i} className="regular-number">
                    {num}
                  </div>
                ))}
                <div className="strong-number">{table.strong}</div>
              </div>
              <Trash2
                className="delete-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  clearTableRow(tableIndex);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  const RightColumn: React.FC<ColumnProps> = () => {
    const regularNumbers: number[] = Array(37)
      .fill(null)
      .map((_, i) => i + 1);
    const strongNumbers: number[] = Array(7)
      .fill(null)
      .map((_, i) => i + 1);

    const getNumberButtonClass = (
      number: number,
      isStrong: boolean = false
    ): string => {
      const isSelected = isNumberSelected(selectedTable - 1, number, isStrong);
      return `number-button ${isStrong ? "strong" : "regular"} ${
        isSelected ? "selected" : ""
      }`;
    };

    return (
      <Card className="right-column">
        <div className="number-selector">
          <div className="section-header">
            <span className="section-title">Regular Numbers (1-47)</span>
            <div className="navigation-buttons">
              <ChevronLeft className="nav-icon" />
              <ChevronRight className="nav-icon" />
            </div>
          </div>

          <div className="number-grid">
            {regularNumbers.map((num) => (
              <button
                key={num}
                className={getNumberButtonClass(num)}
                onClick={() => handleNumberSelection(selectedTable - 1, num)}
              >
                {num}
              </button>
            ))}
          </div>

          <div className="strong-number-section">
            <span className="section-title">Strong Number (1-7)</span>
            <div className="number-grid">
              {strongNumbers.map((num) => (
                <button
                  key={num}
                  className={getNumberButtonClass(num, true)}
                  onClick={() =>
                    handleNumberSelection(selectedTable - 1, num, true)
                  }
                  disabled={isNumberSelected(selectedTable - 1, num, true)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="lottery-interface">
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </div>
  );
};

export default LotteryInterface;