// Dependency Imports 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Asset Imports

// Style Imports
import '../../styles/servicesList.css'

export default function ServicesList({ services }) {

    return (
        <div className='pageBody' >
            <div className='servicesBody' >
                <Typography className='servicesTitle' mt={3} variant="h6" style={{ color: "Green" }}  >
                    Services
                </Typography>
                {services.map(({ service, Icon, description }, i) => {
                    return <Card className={`servicesCard servicesCard${i}`} key={i} sx={{ backgroundColor: 'RGBA(190, 220, 240, .3)' }}>
                        < Icon className='servicesIcon' sx={{ fontSize: 60 }} />
                        <Typography component="div" variant="h6">
                            {service}
                        </Typography>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography variant="caption" color="text.secondary" component="div">
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                })}
            </div>
        </div>
    );
}