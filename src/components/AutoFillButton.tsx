import React from "react";

interface AutoFillButtonProps {
  onAutoFill: () => void;
}

const AutoFillButton: React.FC<AutoFillButtonProps> = ({ onAutoFill }) => {
  return (
    <button
      onClick={onAutoFill}
      style={{
        padding: "10px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      מילוי אוטומטי
    </button>
  );
};

export default AutoFillButton;