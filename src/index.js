import ReactDOM from "react-dom";
import App from "./components/app"
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector(".root"))

root.render(<App />);
