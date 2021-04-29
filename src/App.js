import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { userschema } from "./validations/Uservalidation";
const App = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ name: "" }}
      validationschema={userschema}
      onSubmit={(data: Values) => console.log(data)}
    >
      {({ errors, touched, Values }) => (
        <from>
          <input type="text" value={name} />

          <button type="submit">Submit</button>
        </from>
      )}
    </Formik>
  </div>
);
export default App;
