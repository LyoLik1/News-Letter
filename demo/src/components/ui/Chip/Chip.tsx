import { FC } from "react";
import ChipClick from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import clsx from "clsx";
import { Source } from "../../SourceSelector/SourceSelector";
import ChipIcon from "./ChipIcon";
import "./Chip.scss"; // Import the SCSS module

interface ChipProps {
  label: string;
  onClick: () => void;
  onRemove?: () => void;
  isSelected?: boolean;
  type?: string;
  chipType?: Source;
  style?: "regular" | "sources";
}

const chipStyles = {
  regular: "regular",
  sources: "sources",
};

export const Chip: FC<ChipProps> = ({
  chipType,
  label,
  onClick,
  isSelected,
  type = "click",
  onRemove,
  style = "regular",
}) => {
  const variant = isSelected ? "filled" : "outlined";

  const handleClick = () => {
    onRemove?.();
    onClick();
  };

  return (
    <ChipClick
      avatar={
        chipType ? (
          <Avatar
            sx={{ backgroundColor: "transparent" }}
            className={`${style === "sources" ? "avatar" : ""} `}
          >
            <ChipIcon chipType={chipType} />
          </Avatar>
        ) : undefined
      }
      label={label}
      variant={isSelected !== undefined ? variant : "filled"}
      onClick={handleClick}
      className={clsx(
        chipStyles[style],
        type === "click" ? "click" : "not-click",
        isSelected ? "filled" : ""
      )}
      classes={{
        label: "label",
      }}
    />
  );
};
