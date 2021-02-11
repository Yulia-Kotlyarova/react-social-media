const requiredField = (value) => value ? undefined : 'Required';

const minValue = (min) => (value) => {
    if (value && value.length < min ) {
        return `Min length is ${min} symbols`;
    } else {
        return undefined;
    }
};

let composeValidators = (...validators) => value => {
      return validators.reduce((error, validator) => error || validator(value), undefined);
};

export { requiredField, minValue, composeValidators };
