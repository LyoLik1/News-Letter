import { useState, ChangeEvent } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Accordions = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpansion =
    (panel: string) => (_event: ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {[...Array(6)].map((_, index) => {
        const panel = `panel${index + 1}`;
        return (
          <Accordion
            key={index}
            expanded={expanded === panel}
            onChange={handleExpansion(panel)}
            sx={{
              maxWidth: "560px",
              border: "none",
              boxShadow: "none",
              marginBottom: "10px",
              backgroundColor: "transparent",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panel}-content`}
              id={`${panel}-header`}
              sx={{ height: "80px", border: "none" }}
            >
              <Typography>Accordion {index + 1}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: "none" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
