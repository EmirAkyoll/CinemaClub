import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material'
import { FaUserCircle } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useQuery } from '@apollo/client';
import { GET_USER } from "../../gql/queries";
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../store/movieSlice';
import { useFormik } from "formik";
import { loginSchema } from '../../yup/login';

const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);     

    const movies = useSelector((state: any) => state.movies);
    const dispatch = useDispatch();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: loginAga,
    });

    const { loading, error, data: user_data } = useQuery(GET_USER, {
      variables: { "userName": values.username, "password": values.password }
    });

    function loginAga() {
      if (values.username && values.password) {
        dispatch(logIn(user_data?.getUser))
      }
      console.log("current user: ", movies?.currentUser, "user_data: ", user_data?.getUser);
    }

    // useEffect(() => {}, [])

  return (
      <form 
        onSubmit={handleSubmit}
        style={{
            width: '380px',
            height: '380px',
            border: '1px solid #aaa',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: 'auto',
            marginTop: '40px'
        }}
      >
        <Typography variant='h3' sx={{ color: 'white', fontSize: '30px' }}>
           LOG IN
        </Typography>

        <FormControl sx={{ width: '25ch', mt: '15px' }} variant="standard">
          <InputLabel style={{color: 'white'}} htmlFor="standard-adornment-username">Username</InputLabel>
          <Input
            autoComplete='false'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-adornment-username"
            name='username'
            sx={{ color: 'white', borderColor: 'white', borderBottom: '1px solid #aaa' }}
            endAdornment={
                <FaUserCircle style={{ color: 'white', width: '25px', height: '25px', marginBottom: '10px' }}/>
            }
          />
          {errors.username && touched.username && <p className="auth-module-section-error">{errors.username}</p>}
        </FormControl>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel style={{color: 'white'}} sx={{ marginBottom: '5px' }} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            autoComplete='false'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="standard-adornment-password"
            name='password'
            type={showPassword ? 'text' : 'password'}
            sx={{ color: 'white', borderColor: 'white', borderBottom: '1px solid #aaa' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={{ padding: '0px', marginBottom: '10px' }}
                >
                  {showPassword ? <MdVisibility color='white'/> : <MdVisibilityOff color='white'/>}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.password && touched.password && <p className="auth-module-section-error">{errors.password}</p>}
        </FormControl>

        {/* <p>Are you new here? sign up.</p> */}

        <Button 
          variant="outlined" 
          sx={{color: 'white', borderColor: 'white'}}
          onClick={loginAga}
          disabled={isSubmitting}
        >
           Log In
        </Button>
      </form>
  )
}

export default Login;
