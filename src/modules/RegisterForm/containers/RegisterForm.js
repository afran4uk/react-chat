import React from 'react';
import { withFormik } from 'formik';

import { RegisterForm } from '../components/RegisterForm';

export const RegisterFormik = withFormik({
  mapPropsToValues: () => ({ email: '', username: '', password: '', repeat_password: '' }),

  validate: (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    if (!values.repeat_password) {
      errors.repeat_password = 'Required';
    }

    if (values.repeat_password !== values.password) {
      // TODO
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));

      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
})(RegisterForm);
