import { Suspense, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MovieCard from './MovieCard';
import { FaPlus } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';
import { openModal, setWhichMovies } from '../../store/movieSlice';
import { useQuery } from '@apollo/client';
import { GET_ALL_MOVIES, GET_BOOKMARKS } from '../../gql/queries';
import { Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import MovieSkeleton from './MovieSkeleton';

export default function MovieContainer() {
  const { whichMovies, currentUser } = useSelector((state: any) => state.movies);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  // console.log("pathname: ", pathname);
  
  const { loading: advice_loading, error: advice_error, data: advices } = useQuery(GET_ALL_MOVIES);
  const { loading: bookmarks_loading, error: bookmarks_error, data: bookmarks } = useQuery(GET_BOOKMARKS);
  // console.log("movies: ", advices?.getAllMovies, whichMovies);
  
  useEffect(() => {
    if (pathname == "/") {
      dispatch(setWhichMovies('all'))
    } else {
      dispatch(setWhichMovies('bookmarks'))
    }
  }, [pathname])

  return (
    <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            position: 'relative',
    }}>

      <Box
        onClick={() => dispatch(openModal())}
        sx={{ 
            backgroundColor: '#ffdfc4', 
            display: 'flex', 
            justifyContent: 'center', 
            alignContent: 'center', 
            borderRadius: '3px',
            padding: '5px',
            position: 'absolute',
            top: '30px',
            right: '25px',
            cursor: 'pointer',
            color: 'black'
      }}>
        <FaPlus style={{margin: 'auto'}} />
        <MdMovie size={25} />
      </Box>
      <Container>
        <Grid container rowSpacing={10} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {whichMovies == "all" && pathname == '/' && advice_loading ? (  
            Array(12)
              .fill(null)
              .map((_, index) => (
                <Grid sx={{ mt: '-30px', ml: '-30px' }} key={index} xs={4} sm={3} md={3}>
                  <Suspense fallback={<MovieSkeleton />}>
                    <MovieSkeleton />
                  </Suspense>
                </Grid>
              ))
          ) : (
            <Suspense fallback={<MovieSkeleton />}>
              {advices?.getAllMovies?.map((movie: any) => (
                (whichMovies === 'all' && pathname === '/') && (
                  <Grid sx={{ mt: '150px' }} key={movie?._id} xs={4} sm={3} md={3}>
                    <MovieCard movie={movie} userId={currentUser?._id} bookmarks={currentUser?.bookmarks} />
                  </Grid>
                )
              ))}
            </Suspense>
          )}
        </Grid>

        {bookmarks?.getBookmarks?.map((movie: any) => (
          (whichMovies == "bookmarks" && pathname == '/bookmarks') && (
            <Grid key={movie?._id} xs={4} sm={3} md={3}>
              <MovieCard movie={movie} userId={currentUser?._id} bookmarks={currentUser?.bookmarks} />
            </Grid>)
        ))}
      </Container>
    </Box>
  );
}
