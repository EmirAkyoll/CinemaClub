import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../src/components/shared/Header";
import SmallScreenNavBar from "./components/shared/SmallScreenNavBar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MovieContainer from "./components/movies/MovieContainer";
import OfferContainer from "./components/movies/OfferContainer";
import MovieOfferModal from "./components/movies/MovieOfferModal";
import { Box, Button, Fade, LinearProgress, Slide, SlideProps, Snackbar } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { saveCurrentUser } from "./store/movieSlice";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MovieClicked from "./components/movies/MovieClicked";
import { TransitionProps } from "@mui/material/transitions";
import MovieSkeleton from "./components/movies/MovieSkeleton";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

function App() {
  const [state, setState] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
  (
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >,
  ) =>
  () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  function capitalizeCase(str: any) {
    return str?.replace(/\b\w/g, (match: any) => match.toUpperCase());
  }

  const dispatch = useDispatch();
  const { currentUser, isModalOpen } = useSelector((state: any) => state.movies);

  useEffect(() => {
    console.log("current USSER 1: ", currentUser?.bookmarks);
  //  if (movies?.currentUser != null) {
     const data: any = localStorage.getItem('CurrentUser');
     const parsedData = JSON.parse(data);
     dispatch(saveCurrentUser(parsedData))
  //  }
    console.log("login data: ", parsedData);
    console.log("current USSER 2: ", currentUser?.bookmarks);
    parsedData ? handleClick(SlideTransition)() : console.log("There is no user")
    }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <Header />

      <Box 
        sx={{flexGrow: 1, 
             display: { xs: "block", md: "none" }, 
             position: "fixed", 
             bottom: '0px', 
             zIndex: '10'}}
      >
        <SmallScreenNavBar />
      </Box>
      {/* <MovieSkeleton /> */}
      {/* <MovieClicked /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <MovieCard /> */}
      {/* <MovieContainer  /> */}
      {/* <OfferContainer /> */}
      {/* {console.log("INSIDE USER DATA: ", movies?.currentUser)} */}
      {isModalOpen && <MovieOfferModal />}
   
      <Routes>
        <Route path='/login' element={
          <RouteControl>
            <Login />
          </RouteControl>
        } />

        <Route path='/register' element={
          <RouteControl>
            <Register />
          </RouteControl>
        } />

        <Route path='/' element={
          <MovieContainer />
        } />

        <Route path='/movies/:id' element={
          <MovieClicked />
        } />

        <Route path='/bookmarks' element={
          <MovieContainer />
        } />

        <Route path='/offers' element={
          <OfferContainer />
        } />
      </Routes>

      <Snackbar
        autoHideDuration={3500}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={`Welcome back, ${capitalizeCase(currentUser?.user_name)}.`}
        key={state.Transition.name}
      />
    </div>
    </BrowserRouter>
  );
}

export default App;

export const RouteControl = ({ children }: any) => {
  if (localStorage.getItem("CurrentUser")) {
    // return <Navigate to="/" />;
    return children;
  } else {
    return children;
  }
};
