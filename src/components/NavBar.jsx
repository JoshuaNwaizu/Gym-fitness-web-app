import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '/assets/images/Logo.png';

const NavBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px', margin: '0 40px' }}
        />
      </Link>
      <Stack
        direction="row"
        alignItems="flex-end"
        gap="40px"
        fontSize="24"
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #ff2625',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
