import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Navbar from './Navbar.jsx';
import EventCarousel from './EventCarousel.jsx';
import { Link } from 'react-router-dom';

const carouselItems = [
  {
    name: 'banner1',
    imageUrl: 'banner1.jpg',
  },
  {
    name: 'banner2',
    imageUrl: 'banner2.jpg',
  },
  {
    name: 'banner3',
    imageUrl: 'banner3.png',
  },
  {
    name: 'banner4',
    imageUrl: 'banner4.jpg',
  },
];

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: 'white', color: '#556B2F', minHeight: '100vh' }}>
      <Navbar />
      <EventCarousel items={carouselItems} />
      <Container maxWidth="lg" sx={{ my: 4, py: 4, borderRadius: 2 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          It's Never Too Old to Learn
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 4 }}>
          We are here to help!
        </Typography>
        <Box display="flex" justifyContent="center" mb={10}>
          <Button 
            variant="contained" 
            component={Link} 
            to="/programs"
            sx={{ 
              backgroundColor: '#ffffff', 
              color: 'black', 
              padding: '10px 30px', 
              textTransform: 'none', 
              fontWeight: 'bold', 
              borderRadius: '20px', 
              '&:hover': {
                backgroundColor: '#cccccc', 
                color: '#003300',
              },
            }}
          >
            View our Programs
          </Button>
        </Box>
      </Container>
      
      <Box sx={{ py: 5 }}>
      </Box>
      
      <Box sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h6">
          More exciting content coming soon
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;

