import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Link, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const CenterCard = ({ review }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: '2rem', alignItems: 'center', width: '100%' }}>
      <CardMedia
        component="img"
        sx={{ width: 151, height: 220 }}
        image={review.imageUrl}
        alt={`Image for ${review.title}`}
      />
      <CardContent sx={{ flex: '1 0 auto', padding: '1.5rem' }}>
        <Box sx={{ marginBottom: '1rem' }}>
          <Typography component="span" variant="body2" sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
            Highlight from
          </Typography>
          <Link component={RouterLink} to={`/events/${review.id}`} sx={{ textDecoration: 'none' }}>
            <Typography component="div" variant="h6" sx={{ mt: '0.3rem', color: 'black', '&:hover': { textDecoration: 'underline' } }}>
              {review.title}
            </Typography>
          </Link>
        </Box>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ marginY: '1rem' }}>
          {review.excerpt}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1rem' }}>
          <Typography variant="body2">
            {review.poster}
          </Typography>
        </Box>
        {/* View Detail Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '1rem' }}>
          <Button
            component={RouterLink}
            to={`/events/${review.id}`}
            variant="outlined"
            sx={{ textTransform: 'none' }}
          >
            View Detail
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CenterCard;
