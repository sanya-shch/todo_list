const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (!isNaN(Number(values.username))) {
        errors.username = 'Must be not a number'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.text) {
        errors.text = 'Required'
    }
    return errors
};

export default validate;