import React from 'react';
import { useEffect } from 'react';
import { Link, Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import './styles.css';
import { color } from '@mui/system';
import { useGetGenreQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';


const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';




const demoCategories = [{
    label: 'popular', value: 'popular'
},
{
    label: 'top rated', value: 'top_rated'
}, {
    label: 'up coming', value: 'upcoming'
}];



const Sidebar = ({ setMobileOpen }) => {
    const { GenreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
    const { data, isFetching } = useGetGenreQuery();
    const dispatch = useDispatch();


    const theme = useTheme();


    return (
        <>
            <Link to='/' className='imageLink'>
                <img
                    className='imageLogo'
                    src={theme.palette.mode === 'light' ? redLogo : blueLogo}
                    alt='Film Empire logo'
                />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {demoCategories.map(({ label, value }) => (
                    <Link
                        key={value}
                        to="/"
                        underline="none"
                        color="inherit"
                    >
                        <ListItem button onClick={() => dispatch(selectGenreOrCategory(value))} >
                            <ListItemIcon>
                                <img
                                    src={genreIcons[label.toLowerCase()]}
                                    height="30"
                                    style={{ filter: 'invert(0)' }}
                                />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>

                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {isFetching ? (
                    <Box display={'flex'} justifyContent={'center'}>
                        <CircularProgress >
                        </CircularProgress>
                    </Box>

                ) :
                    data.genres.map(({ name, id }) => (
                        <Link
                            key={name}
                            to="/"
                            underline="none"
                            color="inherit"
                        >
                            <ListItem button onClick={() => dispatch(selectGenreOrCategory(id))}>
                                <ListItemIcon>
                                    <img
                                        src={genreIcons[name.toLowerCase()]}
                                        height="30"
                                        style={{ filter: 'invert(0)' }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItem>
                        </Link>
                    ))}
            </List>
        </>
    )
}

export default Sidebar;