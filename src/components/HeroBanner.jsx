import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import ImageBanner from '/assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#ff2625"
        fontWeight="600"
        fontSize="26px"
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> Repeat
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={4}
      >
        Check out the most effective exercise
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
      >
        Explore exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
      >
        Exercise
      </Typography>
      <img
        src={ImageBanner}
        alt="Gym woman"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
