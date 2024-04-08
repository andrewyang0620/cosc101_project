import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// image come from: https://www.flaticon.com/free-icon/interactive_7700594?k=1712542609573&log-in=google
import websiteIcon from '../../picture/interactive.png';

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
        <img src={websiteIcon} alt="Website Logo" style={{ marginRight: '1%', height: '40px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tech Education for Elder
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
