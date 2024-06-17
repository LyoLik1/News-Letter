import { FC, MouseEventHandler } from "react";
import Btn from "@mui/material/Button";
import clsx from "clsx";
import "./Button.scss";

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler;
  disabled?: boolean;
  style?: "green" | "transparent" | "";
  className?: string;
}

const buttonStyles = {
  green: "green",
  transparent: "transparent",
};

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  style,
  className,
}) => (
  <Btn
    variant="outlined"
    size="medium"
    onClick={onClick}
    disabled={disabled}
    className={clsx("button", style && buttonStyles[style], className)}
  >
    {label}
  </Btn>
);
