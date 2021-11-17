import "../src/styles/App.css";
import Search from "./components/search/Search";
import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forecast from "./components/forecast/Forecast";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Search data-testid="search-bar" />} />
            <Route path="/:cityId" element={<Forecast />} />
          </Routes>
        </Router>
      </div>
    </WeatherProvider>
  );
}

export default App;
