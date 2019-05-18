import React from "react";
import FormField from "./FormField";

const Question = ({ index, removeHandler }) => {
    return (
        <div className="QuizBuilder-questions">
            <FormField
                placeholder="Question Title"
                name={`questions[${index}].title`}
            />
            <FormField
                placeholder="Question Title"
                name={`questions[${index}].a`}
            />
            <button type="button" onClick={removeHandler}>
                Remove Question
            </button>
        </div>
    );
};

export default Question;
