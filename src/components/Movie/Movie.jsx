import React from 'react';
import { Typography, Grid, Grow, Rating, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import './styles.css';

const Movie = ({ movie, i }) => {
    const theme = useTheme();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className='movie'>
            <Grow in={true} key={i} timeout={(i + 1) * 250}>
                
                    <Link
                        className='links'
                        to={`/movie/${movie.id}`}
                        sx={{
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column', // Stack elements vertically
                            alignItems: 'center', // Center-align items horizontally
                            [theme.breakpoints.up('xs')]: {
                                textDecoration: 'none',
                            },
                        }}
                    >
                        <img
                            alt={movie.title}
                            className='image'
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/src/assets/images/noMoviePlaceholder.jpg'}
                        />
                        <Typography className='title' variant='h5' sx={{ color: theme.palette.text.primary, textAlign: 'center' }}>
                            {movie.title}
                        </Typography>
                        <Tooltip disableTouchListener title={`${movie.vote_average.toFixed(1)} / 10` } 
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <Rating sx={{ py: 2 }} readOnly value={movie.vote_average / 2} precision={0.1} />
                            </div>
                        </Tooltip>
                    </Link>
                
            </Grow>
        </Grid>
    );
};

export default Movie;
