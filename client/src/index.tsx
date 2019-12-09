import React from 'react';
import { render } from "react-dom";
import Roadmap from './scenes/Roadmap';

const App = () => {
  return (
    <div className="App">
      <Roadmap />
    </div>
  );
};

const rootElm = document.getElementById("root");
render(<App />, rootElm);
