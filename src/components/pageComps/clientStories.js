// Dependency Imports
import { React, useEffect, useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from "axios";


// Style Imports
import '../../styles/stories.css'


export default function ClientStories() {
    // State variable for client card information
    const [stories, setStories] = useState([]);


    // State & ref variables for card audio
    // const [playing, setPLaying] = useState(false);


    // let playing = useRef(false);
    // let url = useRef('')

    // const voice = (e, audio) => {

    //     // prevent default action
    //     e.preventDefault();

    //     // take url value from onClick & reset ref to url
    //     url = audio;

    //     // create new Audio object with card url
    //     let track = new Audio(url);

    //     playing.current = !playing.current;

    //     // check to see if playing is true or false
    //     if (playing.current) {

    //         // if playing true call the stop function 
    //         track.pause()

    //     }
    //     else {
    //         // if playing is false call the play function 
    //         track.play();
    //     }
    //     // return playing.current ? !playing.current : playing.current;
    // }


    useEffect(() => {
        axios
            .get('https://testimonialapi.toolcarton.com/api')
            .then(clientInfo => {
                setStories(clientInfo.data);
            })
    }, []);

    return (
        <div className='pageBody' >
            <div className='clientBody' >
                <Typography className='clientTitle' mt={3} variant="h3" style={{ color: "RGB(1, 42, 74)" }}  >
                    Testimonials
                </Typography>
                {stories.map(({ name, location, designation, avatar, message, rating, audio, }, i) => {
                    return <Card className={`clientCard clientCard${i}`} key={i} sx={{ display: 'flex', backgroundColor: 'RGB(169, 214, 229)' }}>
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
                            {/* <IconButton aria-label="audio" useref={audio} onClick={e => { voice(e, audio); }}>
                                < AudiotrackIcon />
                            </IconButton> */}
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