import React from "react";
import { Box, TextField, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as Yup from "yup";
import { Formik } from "formik";

import Header from "../../components/Header";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const NewUserValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contact: Yup.string()
    .matches(phoneRegExp, "Invalid Contact Number")
    .required("Contact is required"),
  address1: Yup.string().required("Address is required"),
  address2: Yup.string().required("Address is required"),
});

const NewUserFormInput = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    position: "span 2",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    position: "span 2",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    position: "span 4",
  },
  {
    name: "contact",
    label: "Contact",
    type: "text",
    position: "span 4",
  },
  {
    name: "address1",
    label: "Address 1",
    type: "text",
    position: "span 4",
  },
  {
    name: "address2",
    label: "Address 2",
    type: "text",
    position: "span 4",
  },
];

const NewUserForm = () => {
  const matches = useMediaQuery("(min-width:600px)");

  const handleSubmit = (newUserData, { resetForm }) => {
    console.log(newUserData);
    resetForm();
  };

  return (
    <Box>
      <Header title="Create User" subTitle="Create a New User Profile" />
      <Formik
        initialValues={initialValue}
        validationSchema={NewUserValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(4, minmax(0,1fr))"
              sx={{
                "& > div": { gridColumn: matches ? undefined : "span 4" },
              }}
            >
              {NewUserFormInput.map((input) => (
                <TextField
                  key={input.name}
                  fullWidth
                  variant="filled"
                  type={input.type}
                  label={input.label}
                  name={input.name}
                  value={values[input.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched[input.name] && Boolean(errors[input.name])}
                  helperText={touched[input.name] && errors[input.name]}
                  sx={{ gridColumn: input.position }}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="end" mt="10px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default NewUserForm;
