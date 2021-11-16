import "../src/styles/App.css";
import Search from "./components/search/Search";
import React, { useState } from "react";
import { WeatherProvider } from "./context/WeatherContext";
function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <WeatherProvider>
        <Search data-testid="search-bar" setIsLoading={setIsLoading} />
        {isLoading && <h2>Is Loading...</h2>}
      </WeatherProvider>
    </div>
  );
}

export default App;
