import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { AudioProvider } from "./hooks/useAudioEnabled.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AudioProvider>
            <App />
        </AudioProvider>
    </StrictMode>,
);
