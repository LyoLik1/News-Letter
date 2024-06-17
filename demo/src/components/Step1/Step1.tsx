import { FC } from "react";
import clsx from "clsx";
import { Button } from "../ui/Button/Button";
import { SourceSelector } from "../SourceSelector/SourceSelector";
import { Input } from "../ui/Input";
import { useStep1 } from "./useStep1";
import "./Step1.scss";

export const Step1: FC = () => {
  const {
    sources,
    counter,
    searchQuery,
    filteredSources,
    noSourcesMessage,
    handleButtonClick,
    addActiveSource,
    removeActiveSource,
    handleSearchChange,
  } = useStep1();

  const limit = 5;

  return (
    <div className="step1">
      <h1 className="step1-title">Select Sources</h1>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search sources..."
        className="search-input"
      />
      <span className="step1-count">
        {counter}/{limit}
      </span>
      <div className="step1-chips-wrapper">
        <div
          className={clsx(
            "step1-chips",
            noSourcesMessage && "step1-no-sources"
          )}
        >
          {!noSourcesMessage &&
            sources.map((item) => (
              <SourceSelector
                key={`${item.type}-${item.userInput}`}
                type={item.type}
                userInput={item.userInput}
                onSelect={() => {}}
                onRemove={() => removeActiveSource(item.type, item.userInput)}
              />
            ))}
          {!noSourcesMessage &&
            filteredSources.map((item) => (
              <SourceSelector
                key={item}
                type={item}
                onSelect={addActiveSource}
                disabled={counter >= limit}
                onRemove={() => {}}
              />
            ))}
          {noSourcesMessage && (
            <p className="no-sources-message">{noSourcesMessage}</p>
          )}
        </div>
      </div>
      <Button
        style={counter > 0 ? "green" : ""}
        onClick={handleButtonClick}
        disabled={counter < 1}
        label="ready"
        className="ready-button"
      />
    </div>
  );
};
