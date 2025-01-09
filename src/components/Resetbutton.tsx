interface ResetButtonProps {
    onReset: () => void;
  }
  
  const ResetButton: React.FC<ResetButtonProps> = ({ onReset }) => {
    return (
      <div className="centered-container">  
        <button
          onClick={onReset}
          style={{
            padding: "10px",
            backgroundColor: "#FF0000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          איפוס
        </button>
      </div>
    );
  };
  
  export default ResetButton;
  