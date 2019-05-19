import React from "react";
import { Field, ErrorMessage } from "formik";
import "./FormField.css"
const FormField = ({ name, type, placeholder, children }) => {
    return (
        <div className="FormField">
            <Field name={name} type={type} placeholder={placeholder} />
            <ErrorMessage name={name}>
                {msg => <div className="error error-message">{msg}</div>}
            </ErrorMessage>
            {children}
        </div>
    );
};

export default FormField;
