import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Box
      width="400px"
      sx={{ width: { xl: '1400px' } }}
      m="auto"
    >
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/exercise/:id"
          element={<ExerciseDetails />}
        ></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
