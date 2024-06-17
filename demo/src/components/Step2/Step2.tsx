import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button/Button.tsx";
import { Chip } from "../ui/Chip/Chip";
import "./Step2.scss";
import { useSourceContext } from "../../store/Context.tsx";

export const Step2: FC = () => {
  const [selectedChip, setSelectedChip] = useState<string>("");
  const navigator = useNavigate();
  const { updateTime } = useSourceContext();

  const handleButtonClick = () => {
    updateTime(selectedChip);
    navigator("/app/setup/target");
  };

  const handleChipClick = (label: string) => {
    setSelectedChip(label);
  };

  return (
    <div className="step2">
      <h1 className="step2-title">Pick Time</h1>
      <div className="step2-chips">
        <Chip
          label="5 AM"
          onClick={() => handleChipClick("5")}
          isSelected={selectedChip === "5"}
        />
        <Chip
          label="5 PM"
          onClick={() => handleChipClick("17")}
          isSelected={selectedChip === "17"}
        />
      </div>
      <Button
        onClick={handleButtonClick}
        label="Confirm"
        disabled={!selectedChip}
      />
    </div>
  );
};
