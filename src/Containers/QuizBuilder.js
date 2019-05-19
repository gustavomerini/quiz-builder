import "./QuizBuilder.css";

import * as yup from "yup";
import React, { Component } from "react";
import { Formik, Form, FieldArray } from "formik";
import Question from "../Components/Question/Question";
import FormField from "../Components/FormField/FormField";

const initialState = {
    title: "",
    questions: [
        {
            title: "",
            a: "",
            b: "",
            c: "",
        },
    ],
};

const signupValidationSchema = yup.object().shape({
    title: yup.string().required("Quiz Title is required"),
    questions: yup.array().of(
        yup.object().shape({
            title: yup.string().required("Question Title is required"),
            a: yup.string().required("Option 1 is required"),
            b: yup.string().required("Option 2 is required"),
            c: yup.string().required("Option 3 is required"),
        })
    ),
});

export class QuizBuilder extends Component {
    state = {
        title: "",
        questions: [],
    };

    createQuestionHandler = () => {
        const updatedQuestions = [...this.state.questions];
        updatedQuestions.push({ title: "", a: "", b: "", c: "" });
        this.setState({ questions: updatedQuestions });
    };

    saveQuizHandler = (values, actions) => {
        this.setState({ ...values });
        actions.setSubmitting(false);
        console.log(this.state);
    };

    // #TODO code-splitting
    render() {
        return (
            <div className="Quiz-Builder">
                <Formik
                    validationSchema={signupValidationSchema}
                    initialValues={initialState}
                    onSubmit={this.saveQuizHandler}
                    render={({ values, isSubmitting }) => (
                        <Form>
                            <FormField placeholder="Quiz Title" name="title" type="text" />
                            <FieldArray
                                name="questions"
                                render={({ push, remove }) => (
                                    <div className="QuizBuilderQuestions">
                                        {values.questions.map(
                                            (question, index) => (
                                                <Question
                                                    question={question}
                                                    index={index}
                                                    removeHandler={remove}
                                                    key={index}
                                                />
                                            )
                                        )}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                push({
                                                    title: "",
                                                    a: "",
                                                    b: "",
                                                    c: "",
                                                })
                                            }
                                        >
                                            Add Question
                                        </button>
                                    </div>
                                )}
                            />
                            <button type="submit" disabled={isSubmitting}>
                                Save Quiz
                            </button>
                        </Form>
                    )}
                />
            </div>
        );
    }
}

export default QuizBuilder;
