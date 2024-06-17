import { FC } from "react";
import { Chip } from "../ui/Chip/Chip.tsx";
import { Source } from "./SourceSelector.tsx";
import { useDevice } from "../../hooks/useDevice.ts";

interface SourceChipProps {
  type: Source;
  userInput?: string;
  isSelected: boolean;
  onClick: () => void;
  onRemove?: () => void;
}

const generateLabel = (
  type: Source,
  userInput: string | undefined,
  isMobile: boolean
) => {
  const defaultInput = userInput ? userInput : "______";
  const profiles: { [key in Source]: string } = {
    instagram: `Instagram profile of @${defaultInput}`,
    x: `X profile of @${defaultInput}`,
    medium: `Medium profile of @${defaultInput}`,
    telegram: `Telegram profile of @${defaultInput}`,
    threads: `Threads profile of @${defaultInput}`,
    reddit: `Reddit profile of @${defaultInput}`,
    youTube: `YouTube profile of @${defaultInput}`,
    tikTok: `TikTok profile of @${defaultInput}`,
    facebook: `Facebook profile of @${defaultInput}`,
    pinterest: `Pinterest profile of @${defaultInput}`,
    linkedIn: `LinkedIn profile of @${defaultInput}`,
    rumble: `Rumble profile of @${defaultInput}`,
    dailymotion: `Dailymotion profile of @${defaultInput}`,
    techCrunch: `TechCrunch topic of news is ${defaultInput}`,
    theGuardian: `The Guardian topic of news is ${defaultInput}`,
    europeanParliament: `Euro Parliament topic of news is ${defaultInput}`,
    nyTimes: `NYTimes topic of news is ${defaultInput}`,
    googleDailyMix: `Google Daily Mix topic of news is ${defaultInput}`,
    time: `Time topic of news is ${defaultInput}`,
    coindesk: `Coindesk topic of news is ${defaultInput}`,
    craigslist: `Craigslist topic of news is ${defaultInput}`,
    newsweek: `Newsweek topic of news is ${defaultInput}`,
    cointelegraph: `Cointelegraph topic of news is ${defaultInput}`,
    vimeo: `Vimeo topic of news is ${defaultInput}`,
    foxnews: `Foxnews topic of news is ${defaultInput}`,
    cnn: `CNN topic of news is ${defaultInput}`,
    vox: `Vox topic of news is ${defaultInput}`,
    mashable: `Mashable topic of news is ${defaultInput}`,
  };

  const label = profiles[type] || "profile of @ ______";

  if (isMobile) {
    if (label.includes("profile of ")) {
      const [profileType, profileDetail] = label.split("profile of ");
      return `${profileType}\n${profileDetail}`;
    }
    if (label.includes("topic of news is")) {
      const [profileType, profileDetail] = label.split("topic of news is");
      return `${profileType}\n${profileDetail}`;
    }
  }
  return label;
};

export const SourceChip: FC<SourceChipProps> = ({
  type,
  userInput,
  isSelected,
  onClick,
  onRemove,
}) => {
  const { isMobile } = useDevice();
  const label = generateLabel(type, userInput, isMobile);

  return (
    <div>
      <Chip
        chipType={type}
        label={label}
        style="sources"
        isSelected={isSelected}
        onClick={onClick}
        onRemove={onRemove}
      />
    </div>
  );
};
