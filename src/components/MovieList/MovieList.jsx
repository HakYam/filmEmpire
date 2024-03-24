import React from 'react';
import { Grid, useTheme } from '@mui/material';

import Movie from '../Movie/Movie';

import './styles.css';



const MovieList = ({ movies }) => {
    const theme = useTheme();

    return (
        <Grid container className='moviesContainer' sx={
            {
                [theme.breakpoints.down('sm')]: {
                    justifyContent: 'center',
                },
            }}>
            {movies.results.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
        </Grid>
    )
}

export default MovieList
