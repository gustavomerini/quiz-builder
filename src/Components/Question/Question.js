import React from "react";
import FormField from "../FormField/FormField";
import "./Question.css";
const Question = ({ index, removeHandler }) => {
  return (
    <div className="QuizBuilderCard">
      <FormField
        placeholder="Question Title"
        name={`questions[${index}].title`}
      />
      <FormField placeholder="Option 1" name={`questions[${index}].a`} />
      <FormField placeholder="Option 2" name={`questions[${index}].b`} />
      <FormField placeholder="Option 3" name={`questions[${index}].c`} />
      <button type="button" onClick={removeHandler}>
        Remove Question
      </button>
    </div>
  );
};

export default Question;
