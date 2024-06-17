import { Modal as ModalMui } from "@mui/base/Modal";
import { ChangeEvent, FC, useState } from "react";
import { createPortal } from "react-dom";
import { Input } from "../../ui/Input.tsx";
import { Backdrop } from "./Backdrop.tsx";
import { CustomAutocomplete } from "../../ui/Autocomplete/Autocomplete.tsx";
import { Button } from "../../ui/Button/Button.tsx";
import { useDevice } from "../../../hooks/useDevice.ts";
import "./RssConfirmationModal.scss";

interface RssConfirmationModalProps {
  handleSelect: (text: string) => void;
  handleClose: () => void;
  type?: string;
}

export const RssConfirmationModal: FC<RssConfirmationModalProps> = ({
  handleSelect,
  handleClose,
  type,
}) => {
  const { isMobile } = useDevice();
  const [text, setText] = useState<string>("");
  const [errorVisible, setErrorVisible] = useState<boolean>(false);

  const excludedTypes = [
    "x",
    "instagram",
    "medium",
    "googleDailyMix",
    "telegram",
    "tikTok",
    "youTube",
    "pinterest",
    "threads",
    "facebook",
    "linkedIn",
    "reddit",
    "dailymotion",
    "rumble",
  ];

  const isRss = !excludedTypes.includes(type || "");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAutocompleteChange = (newText: string) => {
    setText(newText);
  };

  const handleSelectModal = () => {
    if (text.length >= 1) {
      handleSelect(text);
    } else {
      setErrorVisible(true);
    }
  };

  const renderTitle = () => {
    if (isRss) return "Pick a topic of news";
    if (type === "googleDailyMix") return "Enter a topic of news";
    return "Enter a username";
  };

  const renderInput = () => {
    if (isRss) {
      return (
        <CustomAutocomplete
          type={type || ""}
          onChange={handleAutocompleteChange}
          value={text}
          width={isMobile ? "100%" : "400px"}
        />
      );
    }
    return (
      <Input
        width={isMobile ? "100%" : "400px"}
        onChange={handleInputChange}
        value={text}
      />
    );
  };

  const renderError = () => {
    if (!errorVisible) return null;
    return (
      <p className="modal-error">
        {isRss ? "Please enter a topic of news" : "Please enter username"}
      </p>
    );
  };

  return createPortal(
    <ModalMui
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open
      slots={{ backdrop: Backdrop }}
      className="modal-wrapper"
    >
      <div className="modal-content">
        <h2 id="unstyled-modal-title" className="modal-title">
          {renderTitle()}
        </h2>
        {renderInput()}
        {renderError()}
        <div id="unstyled-modal-description" className="modal-action">
          <Button style="green" label="Select" onClick={handleSelectModal} />
          <Button style="transparent" label="Close" onClick={handleClose} />
        </div>
      </div>
    </ModalMui>,
    document.body
  );
};
