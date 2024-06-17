import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router.tsx";
import { SourceProvider } from "./store/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SourceProvider>
      <RouterProvider router={routes} />
    </SourceProvider>
  </React.StrictMode>,
);
