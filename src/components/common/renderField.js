import React from "react";

import {FieldContainer} from './renderFieldStyle';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <FieldContainer>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
        </div>
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </FieldContainer>
);

export default renderField;