const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.street = !isEmpty(data.street) ? data.street : '';
  data.city = !isEmpty(data.city) ? data.city : '';

  data.zipcode = !isEmpty(data.zipcode) ? data.zipcode : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';

  data.name = !isEmpty(data.name) ? data.name : '';

  if (!Validator.isEmpty(data.street)) {
    errors.street = 'Street field is required';
  }
  
  if (Validator.isEmpty(data.city)) {
    errors.city = 'City field is required';
  }

  if (!Validator.isEmpty(data.zipcode)) {
    errors.zipcode = 'Zipcode field is required';
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Phone field is required';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Company name field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
