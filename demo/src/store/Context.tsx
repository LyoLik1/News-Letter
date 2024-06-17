import React, { createContext, useContext, useState, ReactNode } from "react";
import { Source } from "../components/SourceSelector/SourceSelector";

interface SourceData {
  type: Source;
  userInput: string;
}

interface SourceContextValue {
  sources: Array<SourceData>;
  userCountry: string;
  time: string;
  updateTime: (time: string) => void;
  updateData: (newSources: Array<SourceData>, newUserCountry: string) => void;
}

const SourceContext = createContext<SourceContextValue | undefined>(undefined);

export const useSourceContext = () => {
  const context = useContext(SourceContext);
  if (!context) {
    throw new Error("useSourceContext must be used within a SourceProvider");
  }
  return context;
};

export const SourceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sources, setSources] = useState<Array<SourceData>>([]);
  const [userCountry, setUserCountry] = useState("");
  const [time, setTime] = useState("");

  const updateData = (
    newSources: Array<SourceData>,
    newUserCountry: string
  ) => {
    setSources(newSources);
    setUserCountry(newUserCountry);
  };
  const updateTime = (time: string) => {
    setTime(time);
  };

  return (
    <SourceContext.Provider
      value={{ sources, userCountry, updateData, updateTime, time }}
    >
      {children}
    </SourceContext.Provider>
  );
};
