import React from 'react';
import { Typography, Grid, Grow, Rating, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import './styles.css';

const Movie = ({ movie, i }) => {
    const theme = useTheme();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='movie'>
            <Grow in={true} key={i} timeout={(i + 1) * 250}>
                <Link
                    className='links'
                    to={`/movie/${movie.id}`}
                    style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                    }}
                >
                    <img
                        alt={movie.title}
                        className='image'
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            marginBottom: '10px', 
                        }}
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/src/assets/images/noMoviePlaceholder.jpg'}
                    />
                    <Typography className='title' variant='h5' sx={{ color: theme.palette.text.primary, height: '40px', overflow: 'hidden' }}>
                        {movie.title}
                    </Typography>
                    <Tooltip disableTouchListener title={`${movie.title} ${movie.vote_average.toFixed(1)} / 10`}>

                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
                        </div>
                    </Tooltip>
                </Link>
            </Grow>
        </Grid>
    );
};

export default Movie;
