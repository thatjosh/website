import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DarkModeProvider } from "./context/DarkModeContext.tsx";
import Init from "./context/Initialiser.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <Init>
        <App />
      </Init>
    </DarkModeProvider>
  </StrictMode>
);
