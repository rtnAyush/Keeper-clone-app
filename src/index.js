import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { createRoot } from 'react-dom/client';

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

ReactDom.render(
    <App />,
    document.getElementById("root")
);
