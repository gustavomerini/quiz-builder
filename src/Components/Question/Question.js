import React from "react";
import FormField from "../FormField/FormField";
import "./Question.css";
const Question = ({ index, removeHandler }) => {
  return (
    <div className="QuizBuilderCard">
      <FormField
        label="Title"
        placeholder="Which one is the most loved?"
        name={`questions[${index}].title`}
      />
      <FormField label="First" placeholder="React <3" name={`questions[${index}].a`} />
      <FormField label="Second"  placeholder="Vue.js" name={`questions[${index}].b`} />
      <FormField label="Third"  placeholder="Angular" name={`questions[${index}].c`} />
      <button type="button" onClick={removeHandler}>
        Remove Question
      </button>
    </div>
  );
};

export default Question;
