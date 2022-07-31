
import './Memory.css';
import Paper from '@material-ui/core/Paper';
import Box from '@mui/material/Box';
import {useState} from 'react'

function Memory (props){
        console.log(props.userId,"userID in memory")
    
    const handleCheckBox=(event)=>{
        console.log(event.target.checked,"checking checkbox value")
        
        console.log(event.target.id,"id")
        // props.onSelect(props.memoryItem.id)
        props.onSelect(event.target.id,event.target.checked)
               
    }
    return(
        <div > 
            <Paper elevation={3} style={{
                margin:200,
                width:200,
                }} id={props.index} >
        
            <input type="checkbox" id={props.memoryItem.id} 
            onChange= {handleCheckBox}
            ></input>
            <h1>{props.memoryItem.title}</h1>
            {/* images always put in public folder  not client*/}
            <img className="image-container" 
                src={props.memoryItem.memory_file}>
            </img>  
        <p>{props.memoryItem.memory_description}</p>
  
        </Paper> 
        </div>
    )
}
export default Memory