import ChipClick from "@mui/material/Chip";
import { FC } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import TelegramIcon from "@mui/icons-material/Telegram";

const Icon = {
  google: <GoogleIcon />,
  telegram: <TelegramIcon />,
};

export const ChipIcon: FC<{ label: keyof typeof Icon }> = ({ label }) => {
  return (
    <ChipClick
      sx={{
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "3px",
        paddingRight: "3px",
      }}
      label={Icon[label]}
      variant="outlined"
      onClick={() => {}}
    />
  );
};
