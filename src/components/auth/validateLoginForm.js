const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (!isNaN(Number(values.username))) {
        errors.username = 'Must be not a number'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
};

export default validate;