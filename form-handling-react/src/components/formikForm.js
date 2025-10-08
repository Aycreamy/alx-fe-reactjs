// src/components/formikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short (min 6)').required('Required'),
});

export default function FormikForm() {
  const initialValues = { username: '', email: '', password: '' };

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus({ loading: true, message: '' });
    try {
      const res = await axios.post('https://reqres.in/api/register', {
        email: values.email,
        password: values.password,
      });
      setStatus({
        loading: false,
        success: true,
        message: `Registered. Token: ${res.data.token}`,
      });
      resetForm();
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: err.response?.data?.error || err.message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '0 auto' }}>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <label>
              Username
              <Field name="username" />
            </label>
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

            <label>
              Email
              <Field name="email" />
            </label>
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

            <label>
              Password
              <Field name="password" type="password" />
            </label>
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>

            {status?.message && (
              <div style={{ color: status.success ? 'green' : 'red', marginTop: 8 }}>
                {status.message}
              </div>
            )}

            <div style={{ marginTop: 12, fontSize: 12 }}>
              Tip: To test reqres success use <code>eve.holt@reqres.in</code>.
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
