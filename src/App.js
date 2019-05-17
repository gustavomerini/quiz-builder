import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  state = {
      title: "My Quiz Title",
      questions: []
  };
  
  createQuestionHandler = () => {
    const updatedQuestions = [...this.state.questions];
    updatedQuestions.push({ title: "", a: "", b: "", c: "" });
    this.setState({ questions: updatedQuestions });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quiz Builder!</h1>
        </header>
        <div className="App-quiz-builder">
          <input placeholder="Quiz Title" />
          {this.state.questions.map((question, i) => {
            return (
              <div className="App-questions" key={i}>
                <input placeholder="Question Title" />
                <input placeholder="A" />
                <input placeholder="B" />
                <input placeholder="C" />
              </div>
            );
          })}
          <button onClick={this.createQuestionHandler}>Add new question</button>
        </div>
      </div>
    );
  }
}

/* 

          {this.state.questions.map(question => {
            return (
              <div>
                <h2> {question.title} </h2>
                <h4> {question.a} </h4>
                <h4> {question.b} </h4>
                <h4> {question.c} </h4>
              </div>
            );
          })}

*/

export default App;
