import { FC, useState } from "react";
import { RssConfirmationModal } from "../Step1/RssConfirmationModal/RssConfirmationModal.tsx";
import { getUserApi } from "../../api/getUserApi.ts";
import { SourceChip } from "./SourceChip.tsx";

export type Source =
  | "instagram"
  | "x"
  | "threads"
  | "youTube"
  | "medium"
  | "linkedIn"
  | "telegram"
  | "tikTok"
  | "facebook"
  | "techCrunch"
  | "theGuardian"
  | "europeanParliament"
  | "nyTimes"
  | "googleDailyMix"
  | "reddit"
  | "craigslist"
  | "newsweek"
  | "cointelegraph"
  | "vimeo"
  | "pinterest"
  | "dailymotion"
  | "foxnews"
  | "coindesk"
  | "rumble"
  | "cnn"
  | "time"
  | "vox"
  | "mashable";

interface SourceSelectorProps {
  onSelect: (type: Source, text: string, userCountry: string) => void;
  type: Source;
  userInput?: string;
  onRemove: () => void;
  disabled?: boolean;
}

export const SourceSelector: FC<SourceSelectorProps> = ({
  type = "instagram",
  userInput,
  onSelect,
  onRemove,
  disabled,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [userCountry, setUserCountry] = useState("");

  const clickHandler = async () => {
    if (disabled) return;
    setOpenModal(true);

    const country = await getUserApi();
    if (country) {
      setUserCountry(country);
    }
  };

  const selectHandler = (text: string) => {
    onSelect(type!, text, userCountry);
    setOpenModal(false);
  };

  const source = (
    <SourceChip
      type={type!}
      userInput={userInput}
      isSelected={!!userInput}
      onClick={userInput ? () => {} : clickHandler}
      onRemove={userInput ? onRemove : undefined}
    />
  );

  return (
    <>
      {source}
      {openModal && (
        <RssConfirmationModal
          type={type}
          handleSelect={selectHandler}
          handleClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};
