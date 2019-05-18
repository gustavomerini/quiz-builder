import "./App.css";

import React, { Component } from "react";
import QuizBuilder from "./Containers/QuizBuilder";


export class App extends Component {
    // #TODO code-splitting
    render() {
        return (
            <div className="App">
                <QuizBuilder />
            </div>
        );
    }
}

export default App;
