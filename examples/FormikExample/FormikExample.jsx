import React from 'react';
import { withFormik } from 'formik';
import {object, string} from 'yup';

const MyInnerForm = props => {
  const {values, touched, errors, handleChange, handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" style={{ display: 'block' }}>Name</label>
      <input
        id="name"
        type="text"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}
      <label htmlFor="email" style={{ display: 'block' }}>Email</label>
      <input
        id="email"
        type="text"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
      <button>Submit</button>
    </form>
  );
};

const FormikExample = withFormik({
  mapPropsToValues: () => ({name: '', email: ''}),
  validationSchema: object().shape({
    name: string()
      .required('Name is required!'),
    email: string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'BasicForm',
})(MyInnerForm);

export default FormikExample;
