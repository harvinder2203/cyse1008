import React, { useState } from 'react';  // Import useState hook
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export function HomeHeroCYSE1008() {
  const [count, setCount] = useState(0);  // Declare the state for the click count

  return (
    <>
      <div>Hello World</div>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',  // Horizontally center the content
          alignItems: 'center',      // Vertically center the content
          height: '200px',           // Adjust height as needed
          padding: '1rem 2rem',
          backgroundColor: '#e0e0e0',
          borderRadius: '8px',
          fontSize: '1.5rem',        // Adjusted font size for the store title
          fontWeight: 'bold',        // Made the store title bold
          color: '#333',
          marginBottom: '1.5rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        Harvinder Store
      </Box>

      {/* Button with onClick functionality */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          padding: '0.8rem 2rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '4px',
          textTransform: 'none',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: '#1976d2',
          },
        }}
        onClick={() => setCount(count + 1)}  // Increment the count on click
      >
        Click Me {count}  {/* Display count on the button */}
      </Button>
    </>
  );
}
