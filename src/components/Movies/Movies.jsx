import React from 'react';
import { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page });
  


  console.log(data);

  if (isFetching) {
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress size={'3rem'}>

        </CircularProgress>
      </Box>
    )
  }

  if (!data.results.length) {
    return <Box display={'flex'} alignItems={'center'} mt={'20px'}>
      <Typography variant='h3'>No Movies that match that name
        <br />
        Please search for something else.
      </Typography>
    </Box>
  }

  if (error) {
    return 'An error has occurred.'
  }
  return (
    <MovieList movies={data} />
  )
}

export default Movies;
