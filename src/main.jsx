import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ContextProvider } from "./components/ContextProvider";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </ChakraProvider>
);
