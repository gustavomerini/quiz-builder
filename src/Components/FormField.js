import React from "react";
import { Field, ErrorMessage } from "formik";

const FormField = ({ name, type, placeholder, children }) => {
    return (
        <>
            <Field name={name} type={type} placeholder={placeholder} />
            <ErrorMessage name={name}>
                {msg => <div className="error error-message">{msg}</div>}
            </ErrorMessage>
            {children}
        </>
    );
};

export default FormField;
