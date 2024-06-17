import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button/Button.tsx";
import { Chip } from "../ui/Chip/Chip";
import { FormatSources } from "./FormatSources";
import { Input } from "../ui/Input";
import "./Step3.scss";
import { useSourceContext } from "../../store/Context.tsx";
import { sendLead } from "../../api/hubspot.ts";

export const Step3 = () => {
  const navigator = useNavigate();
  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  // const [selectedChip, setSelectedChip] = useState<string>("");
  const [isEmailInputVisited, setIsEmailInputVisited] = useState(false);
  const { sources, userCountry, time } = useSourceContext();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleButtonClick = async () => {
    if (isEmailValid) {
      const formattedSources = FormatSources(sources);
      const data = [
        { name: "email", value: email },
        { name: "sources", value: JSON.stringify(formattedSources) },
        { name: "time", value: time },
        { name: "country", value: userCountry },
      ];
      const response = await sendLead(data);
      if (response === true) {
        navigator("/app/thank-you");
      }
    }
  };

  const handleChipClick = (label: string) => {
    // setSelectedChip(label);
    if (label === "Email") {
      setIsEmailClicked(!isEmailClicked);
    }
  };

  return (
    <div className="step3">
      <h1 className="step3-title">Pick location</h1>
      <div className="step3-chips">
        <Chip
          onClick={() => handleChipClick("Email")}
          label="Email"
          isSelected={isEmailClicked}
        />
        <Chip
          onClick={() => handleChipClick("Telegram Bot")}
          type="disable"
          label="Telegram Bot"
        />
        <Chip
          onClick={() => handleChipClick("RSS")}
          type="disable"
          label="RSS"
        />
        <Chip
          onClick={() => handleChipClick("Pigeon Mail")}
          type="disable"
          label="Pigeon Mail"
        />
      </div>
      {isEmailClicked && (
        <div className="step3-input">
          <Input
            onChange={handleInputChange}
            onBlur={() => setIsEmailInputVisited(true)}
            value={email}
            placeholder="Email"
            type="email"
            onValidChange={(isValid: boolean) => setIsEmailValid(isValid)}
            visited={isEmailInputVisited}
          />
        </div>
      )}
      <Button
        onClick={handleButtonClick}
        disabled={!isEmailValid}
        label="Start the magic!"
      />
    </div>
  );
};
