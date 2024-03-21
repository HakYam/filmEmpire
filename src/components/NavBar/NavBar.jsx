import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { Menu, Brightness4, Brightness7, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Sidebar } from '..';
import './styles.css';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAuthenticated = true;
  const drawerWidth = 240;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="toolbar" style={{ outline: 'none' }} sx={{
          height: '80px',
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: { sm: '0', md: `${drawerWidth}px` }
        }}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ marginRight: 2, sm: { display: 'none' } }}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            onClick={() => { }}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit">
                Login <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/profile/:id" className="linkButton">
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar sx={{ width: 30, height: 30 }} alt="Profile" />
              </Button>
            )}
          </div>
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
      <div className="drawer">
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          anchor={isMobile ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ sx: { width: drawerWidth } }}
          sx={{ sm: { width: drawerWidth, flexShrink: 0 } }}
        >
          <Sidebar setMobileOpen={setMobileOpen} />
        </Drawer>
      </div>
    </>
  );
};

export default NavBar;
