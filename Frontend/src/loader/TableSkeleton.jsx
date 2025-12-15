import React from 'react';
import { Box, Card, Skeleton, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Grid, Stack, useTheme, Divider } from '@mui/material';

const TABLE_COLUMNS = 7; 
const SKELETON_ROWS = 7; 

const TableSkeleton = () => {
    const theme = useTheme();

    const getRowBgColor = (index) => {
        return index % 2 === 0 
            ? theme.palette.primary.light 
            : theme.palette.secondary.main; 
    };

    return (
        <Card sx={{ p: 3, borderRadius: 2 }}>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, }}>
                <Skeleton variant="text" width={100} height={40} sx={{ flexGrow: 1,px:5 }} />
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' ,pl:5}}>

                    <Skeleton variant="rectangular" width={100} height={36} sx={{ borderRadius: 1 }} />
                    <Skeleton variant="rectangular" width={100} height={36} sx={{ borderRadius: 1 }} />
                    <Skeleton variant="rectangular" width={140} height={36} sx={{ ml: 2, borderRadius: 1.5, bgcolor: theme.palette.primary.main }} />
                </Box>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead sx={{ bgcolor: theme.palette.background.paper ,borderTop: `1px solid ${theme.palette.divider}`}}>
                        <TableRow>
                            {Array(TABLE_COLUMNS).fill(0).map((_, index) => (
                                <TableCell key={index} sx={{ py: 1.5 }}>
                                    <Skeleton variant="text" width={index === TABLE_COLUMNS - 1 ? 80 : '80%'} height={20} />
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array(SKELETON_ROWS).fill(0).map((_, rowIndex) => {
                            const rowBg = getRowBgColor(rowIndex);
                            const textOpacity = rowIndex % 2 === 0 ? 0.5 : 0.8; 

                            return (
                                <TableRow key={rowIndex} sx={{ bgcolor: rowBg }}>
                                    {Array(TABLE_COLUMNS).fill(0).map((_, cellIndex) => (
                                        <TableCell key={cellIndex} sx={{ borderBottom: 'none' }}>
                                            {cellIndex === TABLE_COLUMNS - 1 ? (
                                                <Stack direction="row" spacing={1}>
                                                    <Skeleton variant="circular" width={28} height={28} sx={{ bgcolor: `rgba(255, 255, 255, ${textOpacity})` }} />
                                                    <Skeleton variant="circular" width={28} height={28} sx={{ bgcolor: `rgba(255, 255, 255, ${textOpacity})` }} />
                                                </Stack>
                                            ) : (
                                                <Skeleton 
                                                    variant="text" 
                                                    width={cellIndex < 2 ? 100 : 80}
                                                    height={20} 
                                                    sx={{ 
                                                        bgcolor: `rgba(255, 255, 255, ${textOpacity})`,
                                                        borderRadius: 0.5
                                                    }}
                                                />
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, p: 1.5,borderRadius:2 ,bgcolor:'text.secondary'}}>
                <Skeleton variant="text" width={120} height={30} sx={{bgcolor:'text.other'}}/>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Skeleton variant="text" width={60} height={30} sx={{bgcolor:'text.other'}} />
                    <Skeleton variant="rectangular" width={60} height={30} sx={{ borderRadius: 1 ,bgcolor:'text.other'}} /> 
                </Stack>
            </Box>
        </Card>
    );
};

export default TableSkeleton;