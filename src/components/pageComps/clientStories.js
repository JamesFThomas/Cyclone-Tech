// Dependency Imports 
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

// Style Imports
import '../../styles/stories.css'


export default function ClientStories({ clients }) {

    return (
        <div className='pageBody' >
            <div className='clientBody' >
                <Typography className='clientTitle' mt={3} variant="h6" style={{ color: "Green" }}  >
                    Testimonials
                </Typography>
                {clients.map(({ name, location, designation, avatar, message, rating, audio, }, i) => {
                    return <Card className={`clientCard clientCard${i}`} key={i} sx={{ display: 'flex', backgroundColor: 'RGBA(190, 220, 240, .3)' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Stack spacing={1} >
                                <Rating name="simple-controlled" value={rating} precision={0.5} readOnly />
                            </Stack>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" component="div">
                                    {`${designation}, ${location}`}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'left', pl: 1, pb: 1, padding: '5px' }} >
                                    <Typography variant="caption" >
                                        {message}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Box>
                        <CardMedia
                            className='clientImage'
                            component="img"
                            sx={{ width: 100 }}
                            image={avatar}
                            alt="client picture"
                        />
                    </Card>
                })}
            </div>
        </div>
    );
}