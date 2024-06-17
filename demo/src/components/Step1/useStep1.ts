import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Source } from "../SourceSelector/SourceSelector";
import { useSourceContext } from "../../store/Context";

const sourceSelectors: Source[] = [
  "instagram",
  "x",
  "threads",
  "youTube",
  "medium",
  "linkedIn",
  "telegram",
  "tikTok",
  "facebook",
  "techCrunch",
  "theGuardian",
  "europeanParliament",
  "nyTimes",
  "googleDailyMix",
  "reddit",
  "craigslist",
  "newsweek",
  "cointelegraph",
  "vimeo",
  "pinterest",
  "dailymotion",
  "foxnews",
  "coindesk",
  "rumble",
  "cnn",
  "time",
  "vox",
  "mashable",
];

export const useStep1 = () => {
  const navigate = useNavigate();
  const { updateData } = useSourceContext();

  const [sources, setSources] = useState<
    Array<{ type: Source; userInput: string }>
  >([]);
  const [counter, setCounter] = useState(0);
  const [userCountry, setUserCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleButtonClick = () => {
    navigate("/app/setup/time", { state: { sources, userCountry } });
    updateData(sources, userCountry);
  };

  const addActiveSource = (type: Source, userInput: string) => {
    const isDuplicate = sources.some(
      (source) => source.type === type && source.userInput === userInput
    );
    if (isDuplicate) {
      alert("This source already exists!");
      return;
    }

    if (counter < 5) {
      setSources([...sources, { type, userInput }]);
      setCounter(counter + 1);
    }
  };
  const removeActiveSource = (type: Source, userInput: string) => {
    const updatedSources = sources.filter(
      (item) => !(item.type === type && item.userInput === userInput)
    );
    setSources(updatedSources);
    setCounter(updatedSources.length);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredSources = useMemo(
    () =>
      sourceSelectors.filter((source) =>
        source.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  const noSourcesMessage =
    filteredSources.length === 0 ? "No sources found" : "";

  return {
    sources,
    counter,
    searchQuery,
    filteredSources,
    noSourcesMessage,
    handleButtonClick,
    addActiveSource,
    removeActiveSource,
    handleSearchChange,
  };
};
