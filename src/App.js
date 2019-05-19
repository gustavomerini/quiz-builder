import "./App.css";

import React, { Component } from "react";
import QuizBuilder from "./Containers/QuizBuilder";

export class App extends Component {
  // #TODO code-splitting
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quiz Builder!</h1>
        </header>
        <QuizBuilder />
      </div>
    );
  }
}

export default App;
