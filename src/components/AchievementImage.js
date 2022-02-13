import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Zoom,Collapse } from '@mui/material';

const useStyle = makeStyles({
    root:{
        maxWidth:345,
        margin:"50px"
    },
    media:{
      height:250
    },
    title:{
        fontFamily: "'Montserrat',Sans-serif",
        
        fontSize:"large"
    }
});

export default function AchievementImage({comps,checked}) {
    console.log(comps);
    let classes=useStyle();
  return (
      <Collapse in={checked}
      { ... (checked?{timeout:3000}:{})}
      >
    <Card 
    
    className={classes.root}
    sx={{backgroundColor: "rgba(0,0,0,0.5)",
          maxWidth:445}}
    >
      <CardMedia
        className={classes.media}
       
        component="img"
        alt="Community"
       image={comps.img}
        
      />
      <CardContent>
        <Typography
         gutterBottom variant="h5" 
         color="white"
         component="div" 
         className={classes.title} 
         fontWeight="bold"
         >
        {comps.title}
        </Typography>
        <Typography 
        color="#ddd"
        variant="body2" 
        fontSize="1.1rem"
        >
        {comps.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Collapse>
  );
}