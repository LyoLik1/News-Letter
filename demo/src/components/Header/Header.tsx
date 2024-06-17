import { FC } from "react";

import QuizIcon from "@mui/icons-material/Quiz";

import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <a className="header-logo" href="/">
        News+Letter
      </a>
      {/*<div*/}
      {/*  onClick={() => {*/}
      {/*    navigator("setup");*/}
      {/*  }}*/}
      {/*  className="header-center-home"*/}
      {/*>*/}
      {/*  <WindowIcon />*/}
      {/*  <span className="header-center-home_text">Home</span>*/}
      {/*</div>*/}
      <a
        href="mailto:hello@happymvp.com"
        target="_blank"
        className="header-faq"
        rel="noreferrer"
      >
        <QuizIcon />
      </a>
    </header>
  );
};
