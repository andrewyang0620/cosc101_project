// Center.jsx
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Navbar from '../HomePage/Navbar';
import CenterCard from './CenterCard'; // Ensure this path is correct
import sampleData from './SampleReview.jsx';

const Center = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: '6rem', marginBottom: '3rem' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom sx={{ marginBottom: '1.5rem' }}>
              Learner Center
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: '2rem' }}>
            Master digital skills at your own pace. Explore a wide range of tutorials and resources designed to make technology simple and enjoyable for seniors
            </Typography>
            {sampleData.map((review, index) => (
              <CenterCard
                key={review.id}
                review={review}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Center;

