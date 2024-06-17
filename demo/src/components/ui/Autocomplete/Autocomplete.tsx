import { FC } from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { NEWS_TOPIC } from "../../../utils/NewsTopic";

interface CustomAutocomleteProps {
  value: string;
  onChange: (newValue: string) => void;
  type: string;
  width?: "100%" | "400px";
}
const formatOptionLabel = (option: string) => {
  return option
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/([A-Z])/g, " $1")
    .trim();
};

export const CustomAutocomplete: FC<CustomAutocomleteProps> = ({
  value,
  onChange,
  type,
  width = "400px",
}) => {
  const {
    techCrunch,
    theGuardian,
    europeanParliament,
    nyTimes,
    time,
    mashable,
    newsweek,
    cointelegraph,
    cnn,
  } = NEWS_TOPIC;
  let optionsArray: string[] = [];

  switch (type) {
    case "techCrunch":
      optionsArray = techCrunch;
      break;
    case "time":
      optionsArray = time;
      break;
    case "mashable":
      optionsArray = mashable;
      break;
    case "theGuardian":
      optionsArray = theGuardian;
      break;
    case "europeanParliament":
      optionsArray = europeanParliament;
      break;
    case "nyTimes":
      optionsArray = nyTimes;
      break;
    case "newsweek":
      optionsArray = newsweek;
      break;
    case "cointelegraph":
      optionsArray = cointelegraph;
      break;
    case "cnn":
      optionsArray = cnn;
      break;
    default:
      optionsArray = [];
      break;
  }

  const handleAutocompleteChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    <Autocomplete
      options={optionsArray}
      getOptionLabel={formatOptionLabel}
      id="clear-on-escape"
      clearOnEscape
      sx={{
        width: width,
        ".MuiAutocomplete-input": {
          fontFamily: "Montserrat",
          fontSize: "18px",
          lineHeight: "28.5px",
          fontWeight: 400,
        },
      }}
      ListboxProps={{
        sx: {
          ".MuiAutocomplete-option": {
            fontFamily: "Montserrat",
            fontSize: "18px",
            lineHeight: "28.5px",
            fontWeight: 400,
          },
        },
      }}
      onChange={handleAutocompleteChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Topic of news"
          variant="standard"
          value={value}
          sx={{
            "& .MuiInputLabel-root": {
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "28.5px",
              fontWeight: 400,
            },
          }}
        />
      )}
    />
  );
};
