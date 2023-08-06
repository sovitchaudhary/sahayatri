import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Register = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
          <label>FirstName</label>
          <div>
          <Field name="firstName" placeholder="firstName"/>
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          </div>
          <label>LastName</label>
          <div>
          <Field name="lastName" placeholder="lastName"/>
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}</div>
          <label>Email</label>
          <div>
            <Field name="email" type="email" placeholder="Type Your Email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>
          <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
export default Register
