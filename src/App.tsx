import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createClient, Provider } from "urql";
import Launches from "./routes/Launches";
import Details from "./routes/Details";
import Navbar from "../src/components/navbar/Navbar";
import Box from "@mui/material/Box";

const client = createClient({
  url: "https://api.spacex.land/graphql/",
});

export default function App() {
  return (
    <Provider value={client}>
      <Navbar />
      <Router>
        <Box className="routes">
          <Link to="/launches">Launches</Link>
          <Link to="/details">Details</Link>
        </Box>
        <Routes>
          <Route path="/launches" element={<Launches />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}
