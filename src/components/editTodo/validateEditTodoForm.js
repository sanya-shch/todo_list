const validate = values => {
    const errors = {};
    if (!values.text) {
        errors.text = 'Required'
    }
    return errors
};

export default validate;