import { NEWS_RSS } from "../../utils/NewsTopic";

export const FormatSources = (
  sources: { type: string; userInput: string }[],
) => {
  return sources.map((source) => {
    switch (source.type) {
      case "instagram":
        return {
          link: source.userInput,
          keywords: [source.userInput],
          type: source.type,
        };
      case "x":
        return {
          link: `https://nitter.poast.org/${source.userInput}`,
          keywords: [source.userInput],
          type: source.type,
        };
      case "medium":
        return {
          link: `https://${source.userInput}.medium.com/feed`,
          keywords: [source.userInput],
          type: source.type,
        };
      case "googleDailyMix":
        return {
          link: NEWS_RSS[source.type].news.rss,
          keywords: [source.userInput],
          type: "rss",
        };
      default:
        return {
          link: NEWS_RSS[source.type][source.userInput].rss,
          keywords: [source.userInput],
          type: "rss",
        };
    }
  });
};
