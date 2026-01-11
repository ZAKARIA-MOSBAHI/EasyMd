import { createRoot } from "react-dom/client";
import "./index.css";
import "./quillEditor.css";
import App from "./App.tsx";
import "highlight.js/styles/github.css";
import { AppProvider } from "./context/AppContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <App />
  </AppProvider>
);
