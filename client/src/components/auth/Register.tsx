import React, { useState } from "react";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../gql/mutations";
import { v4 as generate_random_id } from 'uuid';
import { registerSchema } from "../../yup/register";
import { useFormik } from "formik";

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      user_name: "",
      e_mail: "",
      password: ""
    },
    validationSchema: registerSchema,
    onSubmit: signUp,
  });

  function signUp(){
    createUser({
      variables: {
        "id": generate_random_id(),
        "userName": values.user_name,
        "eMail": values.e_mail,
        "password": values.password,
        "bookmarks": [],
      } 
    });
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "380px",
        height: "420px",
        border: "1px solid #aaa",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <Typography variant="h3" sx={{ color: "white", fontSize: "30px" }}>
        REGISTER
      </Typography>

      <FormControl sx={{ width: "25ch", mt: "15px" }} variant="standard">
        <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-user_name">
          Username
        </InputLabel>
        <Input
          autoComplete="false"
          value={values.user_name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="standard-adornment-user_name"
          name='user_name'
          sx={{
            color: "white",
            borderColor: "white",
            borderBottom: "1px solid #aaa",
          }}
          endAdornment={
            <FaUserCircle
              style={{
                color: "white",
                width: "25px",
                height: "25px",
                marginBottom: "10px",
              }}
            />
          }
        />
        {errors.user_name && touched.user_name && <p className="auth-module-section-error">{errors.user_name}</p>}
      </FormControl>
      <FormControl sx={{ width: "25ch", mt: "15px" }} variant="standard">
        <InputLabel style={{ color: "white" }} htmlFor="standard-adornment-e_mail">
          E-mail
        </InputLabel>
        <Input
          autoComplete="false"
          value={values.e_mail}
          onChange={handleChange}
          onBlur={handleBlur}
          id="standard-adornment-e_mail"
          name='e_mail'
          sx={{
            color: "white",
            borderColor: "white",
            borderBottom: "1px solid #aaa",
          }}
          endAdornment={
            <MdOutlineMailOutline
              style={{
                color: "white",
                width: "25px",
                height: "25px",
                marginBottom: "10px",
              }}
            />
          }
        />
        {errors.e_mail && touched.e_mail && <p className="auth-module-section-error">{errors.e_mail}</p>}
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel
          style={{ color: "white" }}
          sx={{ marginBottom: "5px" }}
          htmlFor="standard-adornment-password"
        >
          Password
        </InputLabel>
        <Input
          autoComplete="false"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="standard-adornment-password"
          name='password'
          type={showPassword ? "text" : "password"}
          sx={{
            color: "white",
            borderColor: "white",
            borderBottom: "1px solid #aaa",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                sx={{ padding: "0px", marginBottom: "10px" }}
              >
                {showPassword ? (
                  <MdVisibility color="white" />
                ) : (
                  <MdVisibilityOff color="white" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && touched.password && <p className="auth-module-section-error">{errors.password}</p>}
      </FormControl>

      {/* <p>Are you new here? sign up.</p> */}

      <Button
        variant="outlined"
        sx={{ color: "white", borderColor: "white", marginTop: "15px" }}
        onClick={signUp}
        disabled={isSubmitting}
      >
        Sign Up
      </Button>
    </form>
  );
};

export default Register;
