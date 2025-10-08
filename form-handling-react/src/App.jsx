import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';


export default function App() {
const [useFormik, setUseFormik] = useState(false);
return (
<div style={{ padding: 20 }}>
<button onClick={() => setUseFormik((p) => !p)}>
Switch to {useFormik ? 'Controlled' : 'Formik'}
</button>
<div style={{ marginTop: 20 }}>
{useFormik ? <FormikForm /> : <RegistrationForm />}
</div>
</div>
);
}