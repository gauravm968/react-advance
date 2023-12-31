import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  // for router
  <BrowserRouter>

    {/* for context api */}
    <AppContextProvider>
      <App />
    </AppContextProvider>
    
  </BrowserRouter>

);
