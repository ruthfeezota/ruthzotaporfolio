import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga4";



// Initialize Google Analytics
ReactGA.initialize("G-3XCF5DFC11");

ReactGA.send({ 
  hitType: "pageview", 
  page: "/my-path", 
  title: "Custom Title" 
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);