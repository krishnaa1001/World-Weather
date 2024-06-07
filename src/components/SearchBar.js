import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <TextField
        variant="outlined"
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
