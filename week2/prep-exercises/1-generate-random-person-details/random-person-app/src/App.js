import React from "react";
import "./App.css";
import RandomPerson from "./component/RandomPerson";

function App({ person }) {
  return (
    <>
      <RandomPerson person={person} />
    </>
  );
}

export default App;
