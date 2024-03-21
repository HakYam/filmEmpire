import React from 'react';
import { useEffect } from 'react';
import { Link, Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import './styles.css';
import { color } from '@mui/system';


const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const demoCategories = [{
    label: 'aa', value: 'popular'
},
{
    label: 'bb', value: 'top_rated'
}, {
    label: 'vcc', value: 'upcomming'
}];

const categories = [{
    label: 'popular', value: 'popular'
},
{
    label: 'top rated', value: 'top_rated'
}, {
    label: 'upcomming', value: 'upcomming'
}];

const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme();


    return (
        <>
            <Link to='/' className='imageLink'>
                <img
                    className='image'
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
                        <ListItem button onClick={() => { /* Handle onClick event */ }}>
                            {/* <ListItemIcon>
                                <img
                                    src={redLogo}
                                    height="30"
                                    style={{ filter: 'invert(1)' }} 
                                />
                            </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>

                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListSubheader>Genre</ListSubheader>
                {categories.map(({ label, value }) => (
                    <Link
                        key={value}
                        to="/"
                        underline="none"
                        color="inherit"
                    >
                        <ListItem button onClick={() => { /* Handle onClick event */ }}>
                            {/* <ListItemIcon>
                                <img
                                    src={redLogo}
                                    height="30"
                                    style={{ filter: 'invert(1)' }} 
                                />
                            </ListItemIcon> */}
                            <ListItemText primary={label} />
                        </ListItem>

                    </Link>
                ))}
            </List>
        </>
    )
}

export default Sidebar;