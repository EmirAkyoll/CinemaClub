import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import LargeScreenNavBar from './LargeScreenNavBar';
import { Link } from 'react-router-dom'

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function logOut() {
    localStorage.removeItem('CurrentUser')
  }
  
  return (
    <AppBar 
        position="static" 
        // color='transparent' 
        sx={{
            bgcolor: 'black',
            height: '100px',
            display: 'flex',
            justifyContent: { xs: 'space-evenly', md: 'center' },
            border: 'none',
            borderBottom: '1px solid #777',
            position: 'sticky',
            top: '0px',
            zIndex: '20'
           }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '35px',
              letterSpacing: '.2rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Cinema Club
          </Typography>
        </Link>

          <Box sx={{ 
                    flexGrow: 1, 
                    display: { xs: 'none', md: 'flex' }, 
                    justifyContent: 'flex-end',
                    marginRight: '45px'
                  }}>
            <LargeScreenNavBar />
          </Box>

          <Box sx={{ flexGrow: 0, float: 'right' }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu} onClickCapture={logOut}>
                <Typography textAlign="center" color="red">Log Out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
