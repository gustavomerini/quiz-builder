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
  };

  saveQuizHandler = e => {
    e.preventDefault();
    console.log(e.target);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quiz Builder!</h1>
        </header>
        <form className="App-quiz-builder" onSubmit={this.saveQuizHandler} onChange={this.handleChange}  >
          <input placeholder="Quiz Title" />
          {this.state.questions.map((_, i) => {
            return (
              <div className="App-questions" key={i}>
                <input id="questionTitle" placeholder="Question Title" />
                <input id="a" placeholder="A" />
                <input id="b" placeholder="B" />
                <input id="c" placeholder="C" />
              </div>
            );
          })}
          <button type="button" onClick={this.createQuestionHandler}>
            Add new question
          </button>
          <button type="submit">Save Quiz</button>
        </form>
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
