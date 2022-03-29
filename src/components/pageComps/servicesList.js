// Dependency Imports 
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// Asset Imports
// import wwLogo2 from '../../assets/wwLogo2.png'

// Style Imports
import '../../styles/servicesList.css'

export default function ServicesList() {

    return (
        <div className='pageBody'>
            <Paper className='servicesPaper' variant="outlined" >
                <div className='servicesGrid'>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent>
                            <Typography mt={3} variant="subtitle1" component="div" style={{ color: "red" }} gutterBottom >
                                Cloud Services
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            // sx={{ height: 100, width: 100 }}
                            image=""
                            alt=""
                        />
                    </Card>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent>
                            <Typography mt={3} variant="subtitle1" component="div" style={{ color: "red" }} gutterBottom >
                                Data Secuirty
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            // sx={{ height: 50, width: 50 }}
                            image=""
                            alt=""
                        />
                    </Card>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent>
                            <Typography mt={3} variant="subtitle1" component="div" style={{ color: "red" }} gutterBottom >
                                Technical Support
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            // sx={{ height: 50, width: 50 }}
                            image=""
                            alt=""
                        />
                    </Card>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent>
                            <Typography mt={3} variant="subtitle1" component="div" style={{ color: "red" }} gutterBottom >
                                Application Servers
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            // sx={{ height: 50, width: 50 }}
                            image=""
                            alt=""
                        />
                    </Card>
                </div>
            </Paper>
        </div>
    );
}