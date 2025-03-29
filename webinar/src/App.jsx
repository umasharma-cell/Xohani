import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./Components/Navbar";
import WebinarList from "./Components/display";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/webinar-details" element={<WebinarList />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
