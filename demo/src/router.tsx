import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login } from "./layouts/Login/Login";
import { Default } from "./layouts/Default/Default.tsx";
import { Step1 } from "./components/Step1/Step1";
import { Step2 } from "./components/Step2/Step2";
import { Step3 } from "./components/Step3/Step3";
import { Faq } from "./components/Faq/Faq";
import { ThankYou } from "./layouts/ThankYou/ThankYou.tsx";

export const routes = createBrowserRouter([
  {
    path: "/app",
    element: <Default />,
    children: [
      { path: "", element: <Navigate to="setup" /> },
      { path: "faq", element: <Faq /> },
      { path: "thank-you", element: <ThankYou /> },
      {
        path: "setup",
        children: [
          { path: "", element: <Navigate to="sources" /> },
          { path: "sources", element: <Step1 /> },
          { path: "time", element: <Step2 /> },
          { path: "target", element: <Step3 /> },
        ],
      },
    ],
  },
  {
    path: "/app/auth",
    element: <Login />,
  },
]);
