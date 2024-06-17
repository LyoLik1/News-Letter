import { FC } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FeedIcon from "@mui/icons-material/Feed";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import MediumIcon from "../../../assets/medium.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TechCrunchIcon from "../../../assets/techCrunch.svg";
import TelegramIcon from "@mui/icons-material/Telegram";
import TimeIcon from "../../../assets/time.svg";
import TikTokIcon from "../../../assets/tiktok.svg";
import CraigslistIcon from "../../../assets/craigslist.svg";
import ThreadIcon from "../../../assets/threads.svg";
import NewsweekIcon from "../../../assets/newsweek.svg";
import VimeoIcon from "../../../assets/vimeo.svg";
import DailymotionIcon from "../../../assets/dailymotion.svg";
import MashableIcon from "../../../assets/mashable.svg";
import CointelegrapIcon from "../../../assets/cointelegraph.svg";
import TheGuardIcon from "../../../assets/theGuardian.svg";
import CoindeskIcon from "../../../assets/coindesk.svg";
import EuroParlamentIcon from "../../../assets/euroParlament.svg";
import nyTimesIcon from "../../../assets/nytimes.svg";
import FoxNewsIcon from "../../../assets/foxnews.svg";
import VoxIcon from "../../../assets/vox.svg";
import googleDailyMixIcon from "../../../assets/googleDailyMix.svg";
import RumbleIcon from "../../../assets/rumble.svg";
import CNNIcon from "../../../assets/cnn.svg";
import { Source } from "../../SourceSelector/SourceSelector";

interface ChipIconProps {
  chipType?: Source;
}

const Icons = {
  instagram: <InstagramIcon />,
  x: <XIcon />,
  youTube: <YouTubeIcon />,
  reddit: <RedditIcon />,
  pinterest: <PinterestIcon />,
  telegram: <TelegramIcon />,
  rss: <FeedIcon />,
  linkedIn: <LinkedInIcon />,
  facebook: <FacebookIcon />,
  medium: <img src={MediumIcon} />,
  techCrunch: <img src={TechCrunchIcon} />,
  theGuardian: <img src={TheGuardIcon} />,
  europeanParliament: <img src={EuroParlamentIcon} />,
  nyTimes: <img src={nyTimesIcon} />,
  googleDailyMix: <img src={googleDailyMixIcon} />,
  time: <img src={TimeIcon} />,
  tikTok: <img src={TikTokIcon} />,
  threads: <img src={ThreadIcon} />,
  craigslist: <img src={CraigslistIcon} />,
  newsweek: <img src={NewsweekIcon} />,
  cointelegraph: <img src={CointelegrapIcon} />,
  vimeo: <img src={VimeoIcon} />,
  dailymotion: <img src={DailymotionIcon} />,
  foxnews: <img src={FoxNewsIcon} />,
  coindesk: <img src={CoindeskIcon} />,
  rumble: <img src={RumbleIcon} />,
  cnn: <img src={CNNIcon} />,
  vox: <img src={VoxIcon} />,
  mashable: <img src={MashableIcon} />,
};

const ChipIcon: FC<ChipIconProps> = ({ chipType }) => {
  const icon = chipType ? Icons[chipType] : Icons["rss"];

  return <>{icon}</>;
};

export default ChipIcon;
