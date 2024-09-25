interface ProgressBarProps {
  max: number;
  value: number;
  onChange: (progress: number) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  max,
  value,
  onChange,
  onMouseDown,
  onMouseUp,
}) => {
  const percentNum = (value / max || 0) * 100;
  const percent = `${percentNum}%`;
  return (
    <div style={{ width: "100%" }}>
      <input
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        type="range"
        min="0"
        max="100"
        step="1"
        value={percentNum}
        style={{ width: "100%", margin: 0 }}
      />
    </div>
  );
};

export default ProgressBar;
