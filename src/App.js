import "./App.css";

import * as yup from "yup";
import React, { Component } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";

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
            a: yup.string().required("A is required"),
        })
    ),
});

export class App extends Component {
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
    };

    // #TODO code-splitting
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Quiz Builder!</h1>
                </header>
                <Formik
                    validationSchema={signupValidationSchema}
                    initialValues={initialState}
                    onSubmit={this.saveQuizHandler}
                    render={({ values, isSubmitting }) => (
                        <Form>
                            <Field name="title" type="text" />
                            <ErrorMessage name="title">
                                {msg => (
                                    <div className="error error-message">
                                        {msg}
                                    </div>
                                )}
                            </ErrorMessage>
                            <FieldArray
                                name="questions"
                                render={arrayHelpers => (
                                    <div className="App-quiz-builder">
                                        {values.questions.map(
                                            (question, index) => (
                                                <div
                                                    className="App-questions"
                                                    key={index}
                                                >
                                                    <Field
                                                        placeholder="Question Title"
                                                        name={`questions[${index}].title`}
                                                    />
                                                    <ErrorMessage
                                                        name={`questions[${index}].title`}
                                                    >
                                                        {msg => (
                                                            <div className="error error-message">
                                                                {msg}
                                                            </div>
                                                        )}
                                                    </ErrorMessage>
                                                    <Field
                                                        name={`questions.${index}.a`}
                                                    />
                                                    <ErrorMessage
                                                        name={`questions[${index}].a`}
                                                    >
                                                        {msg => (
                                                            <div className="error error-message">
                                                                {msg}
                                                            </div>
                                                        )}
                                                    </ErrorMessage>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            arrayHelpers.remove(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        Remove Question
                                                    </button>
                                                </div>
                                            )
                                        )}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                arrayHelpers.push({
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

export default App;
