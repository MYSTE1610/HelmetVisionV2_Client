import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Avatar, Grid, TextField } from '@mui/material';
import helmetImage from './Helmet Image for Instance.png'; // Import the image
import './UserInstances.css'; // You can add custom styling here if needed

const UserInstances = () => {
  const instances = useSelector((state) => state.user.instances);

  // Use actual data for speed and location from the last instance
  const lastInstance = instances.length > 0 ? instances[instances.length - 1] : null;
  const speed = lastInstance ? `${lastInstance.speed} km/h` : 'Not Available';
  const location = lastInstance ? lastInstance.location : 'Not Available';
  const helmetStatus = lastInstance ? lastInstance.helmetStatus : 'Not Available';

  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', mt: 4, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          User Instances
        </Typography>

        {/* Avatar Circle with Custom Image */}
        <Avatar 
          sx={{ 
            width: 100, 
            height: 100, 
            backgroundColor: '#1976d2', 
            margin: 'auto' 
          }}>
          {/* Use the imported helmet image */}
          <img 
            src={helmetImage} 
            alt="Helmet Instance" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
          />
        </Avatar>

        {/* Helmet Status */}
        <Grid container spacing={2} mt={4}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Helmet Status"
              value= "Yes"
              InputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>

          {/* Speed and Location Fields */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Speed"
              value = "80 kmph"
              InputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Location"
              value={location}
              InputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserInstances;
