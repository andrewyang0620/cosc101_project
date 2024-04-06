import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import websiteIcon from '/UBC/cosc101/cosc101_project/web/src/picture/code-stable-white.png'; // Adjust the path as needed

const NavBarButton = ({ children, ...props }) => (
  <Button color="inherit" sx={{ marginRight: 2 }} {...props}>
    {children}
  </Button>
);

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#556B2F', color: '#FFF' }}>
      <Toolbar>
        <img src={websiteIcon} alt="Website Logo" style={{ marginRight: '10px', height: '40px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Digital on Call
        </Typography>
        <NavBarButton onClick={() => navigate('/')}>Home</NavBarButton>
        <NavBarButton onClick={() => navigate('/learning-center')}>Learning Center</NavBarButton>
        <NavBarButton onClick={() => navigate('/online-safty')}>Online Safety</NavBarButton>
        <NavBarButton onClick={() => navigate('/blog-news')}>Blog & News</NavBarButton>

        <TextField
          variant="outlined"
          size="small"
          sx={{ backgroundColor: '#FFF', borderRadius: 1, marginRight: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
