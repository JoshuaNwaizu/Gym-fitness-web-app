import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography, Button, TextField } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'http://exercisedb.p.rapidapi.com',
        exerciseOptions
      );
      console.log(exercisesData);
    }
    console.log('click');
  };

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyItems="center"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '40px', xs: '30px' }, mb: '50px' }}
        textAlign="center"
      >
        Awesome exercises you <br /> should know
      </Typography>
      <Box
        position="relative"
        mb="72px"
      >
        <TextField
          height="76px"
          sx={{
            input: { borderRadius: ' 4px', fontWeight: 700, border: 'none' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#ff2635',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '40px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
