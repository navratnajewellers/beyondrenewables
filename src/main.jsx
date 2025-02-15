import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "rsuite/dist/rsuite.min.css";
import App from "./App.jsx";
import { ServerProvider } from "./context/server.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ServerProvider>
      <App />
    </ServerProvider>
  </StrictMode>
);
