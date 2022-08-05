
import './Memory.css';
import Paper from '@material-ui/core/Paper';
import Box from '@mui/material/Box';
import {useState} from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

function Memory (props){
        // console.log(props.userId,"userID in memory")
    
    const handleCheckBox=(event)=>{
        // console.log(event.target.checked,"checking checkbox value")
        
        // console.log(event.target.id,"id")
        // props.onSelect(props.memoryItem.id)
        props.onSelect(event.target.id,event.target.checked)
               
    }
    return(
        <div className='memory-display-contr' > 
            <input className='checkBox-container' type="checkbox" id={props.memoryItem.id} 
            onChange= {handleCheckBox}
            ></input>
            <h1 className='image-title'>{props.memoryItem.title}</h1>
            {/* images always put in public folder  not client*/}
            <img className="image-item" data-testid="memory-image" className="image-container" 
                src={props.memoryItem.cloudinary_secure_url}>
            </img>  
            <p className='memo-desc'>{props.memoryItem.memory_description}</p>
  
 
        </div>
    )

    

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
//     return (
//         <Card sx={{ maxWidth: 345 }} style={{color: "#ffffff"}}>
//             <CardActions>
//                 <Checkbox id={props.memoryItem.id} 
//                 onChange= {handleCheckBox} />
//             </CardActions>
//           <CardMedia
//             component="img"
//             height="200"
//             image={props.memoryItem.cloudinary_secure_url}
//             alt="memory image"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//             {props.memoryItem.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {props.memoryItem.memory_description}
//             </Typography>
//           </CardContent>
          
//         </Card>
//       );

}
export default Memory