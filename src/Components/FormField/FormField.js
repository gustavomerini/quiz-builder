import React from "react";
import { Field, ErrorMessage } from "formik";
import "./FormField.css";
const FormField = ({ name, type, placeholder, children, label }) => {
  return (
    <div className="FormField">
      <div className="field">
        {label && <label for={name}> {label} </label>}
        <Field name={name} id={name} type={type} placeholder={placeholder} />
        <ErrorMessage name={name}>
          {msg => <div className="error error-message">{msg}</div>}
        </ErrorMessage>
        {children}
      </div>
    </div>
  );
};

export default FormField;
