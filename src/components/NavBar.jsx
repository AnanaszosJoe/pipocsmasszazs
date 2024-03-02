import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SpaIcon from '@mui/icons-material/Spa';

const pages = [
    {section:"masszazsok", name:"Masszázsok"},
    {section:"arckezeles", name:"Arckezelések"},
    {section:"idopont", name:"Időpontkérés"},
    {section:"arak", name:"Árak"},
    {section:"ajandek", name:"Ajándék utalvány"},
    {section:"fontos", name:"Fontos tudnivalók"},
    {section:"holvagyunk", name:"Hol vagyunk"},
    {section:"kapcsolat", name:"Kapcsolat"},
];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  return (
    <AppBar position="sticky" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SpaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((obj) => (
                <MenuItem key={obj.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><a className='menu-xs' href={"#"+`${obj.section}`}>{obj.name}</a></Typography>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SpaIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((obj) => (
              <Button
                key={obj.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex', textAlign:"center" }}
                
              >
                <a className='menu-md' href={"#"+`${obj.section}`}>{obj.name}</a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}