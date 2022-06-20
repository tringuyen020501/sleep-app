import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} path="login" />
          <Route path="admin" element={<App />} />
        </Route>
      </Routes>
    </Router> */}
    <App></App>
  </React.StrictMode>
);
