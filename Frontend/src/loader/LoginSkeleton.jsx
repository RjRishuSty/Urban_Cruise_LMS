import React from 'react';
import { Box, Card, Skeleton, Stack, Container, useTheme } from '@mui/material';

const LoginSkeleton = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xs" sx={{ p: 0 }}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: theme.palette.background.default,
          px: 3,
        }}
      >
        <Stack spacing={1} alignItems="center" sx={{ mb: 5, width: '100%' }}>
          <Skeleton 
            variant="text" 
            width="80%" 
            height={48} 
            sx={{ borderRadius: 1,bgcolor: 'rgba(0, 0, 0, 0.5)' }} 
          />
          <Skeleton 
            variant="text" 
            width="60%" 
            height={24} 
            sx={{ borderRadius: 1,bgcolor: 'rgba(0, 0, 0, 0.5)' }} 
          />
        </Stack>

        {/* 2. Form Inputs Section */}
        <Stack spacing={3} sx={{ width: '100%' }}>
          {/* Email Input Skeleton (Includes Icon and Label area) */}
          <Box>
             <Skeleton variant="text" width={100} height={20} sx={{ mb: 0.5,bgcolor: 'rgba(0, 0, 0, 0.5)' }} />
             <Skeleton 
                variant="rectangular" 
                width="100%" 
                height={56} 
                sx={{ borderRadius: 1.5, bgcolor: 'rgba(0, 0, 0, 0.5)' }} 
              />
          </Box>

          {/* Password Input Skeleton */}
          <Box>
             <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton variant="text" width={60} height={20} sx={{ mb: 0.5 ,bgcolor: 'rgba(0, 0, 0, 0.5)'}} />
                <Skeleton variant="text" width={100} height={20} sx={{ mb: 0.5,bgcolor: 'rgba(0, 0, 0, 0.5)' }} />
             </Box>
             <Skeleton 
                variant="rectangular" 
                width="100%" 
                height={56} 
                sx={{ borderRadius: 1.5, bgcolor: 'rgba(0, 0, 0, 0.5)' }} 
              />
          </Box>
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height={48} 
            sx={{ 
                bgcolor: theme.palette.primary.main, 
                borderRadius: 1.5,
                mt: 1 
            }} 
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginSkeleton;