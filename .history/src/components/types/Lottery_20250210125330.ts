export interface Table {
    regular: (number | null)[];
    strong: number | null;
  }
  
  export interface LotteryContextType {
    selectedTable: number;
    setSelectedTable: (table: number) => void;
    tables: Table[];
    setTables: React.Dispatch<React.SetStateAction<Table[]>>;
    selectedRaffles: number;
    setSelectedRaffles: (raffles: number) => void;
    calculateTotalPrice: (raffles: number) => string;
    BASE_PRICE: number;
  }