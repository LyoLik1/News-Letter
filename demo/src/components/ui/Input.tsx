import { FC, ChangeEvent, useState } from "react";
import { OutlinedInput } from "@mui/material";
interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
  valid?: boolean;
  onValidChange?: (isValid: boolean) => void;
  visited?: boolean;
  width?: "100%" | "400px";
  className?: string;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  onBlur,
  placeholder,
  type,
  valid,
  onValidChange,
  visited,
  width = "400px",
  className,
}) => {
  const [isValid, setIsValid] = useState(valid || false);

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    validate(value);
  };

  const validate = (inputValue: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(inputValue);
    setIsValid(isValid);
    if (onValidChange) {
      onValidChange(isValid);
    }
  };

  return (
    <>
      <OutlinedInput
        placeholder={placeholder}
        type={type}
        onBlur={handleBlur}
        sx={{
          "& input": {
            fontFamily: "Montserrat",
            fontSize: "18px",
            lineHeight: "28.5px",
            fontWeight: 400,
          },
          width: width,
          height: "60px",
        }}
        value={value}
        onChange={onChange}
        className={className}
      />
      {visited && !isValid && (
        <p style={{ color: "red", textAlign: "center" }}>
          Invalid email address
        </p>
      )}
    </>
  );
};
