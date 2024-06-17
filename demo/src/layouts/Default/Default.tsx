import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import "./Default.scss";

export const Default = () => {
  const location = useLocation();

  const locationPath = () => {
    switch (location.pathname) {
      case "/":
        return "homePath";
      case "/faq":
        return "faqPath";
      case "/setup/sources":
        return "sourcesPath";
      case "/setup/time":
        return "timePath";
      case "/setup/target":
        return "targetPath";
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <main className={clsx("page", locationPath())}>
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </>
  );
};
