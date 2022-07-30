
import './Memory.css';
import Paper from '@material-ui/core/Paper';
import Box from '@mui/material/Box';
import {useState} from 'react'

function Memory (props){
        // console.log(props.userId,"userID in memory")
    const [checkBoxValue,setCheckBoxValue]= useState([])
    const handleCheckBox=(event)=>{
        console.log(event,"event")
        console.log(event.target.id,"id")
        setCheckBoxValue([...checkBoxValue,event.target.id])
    }
    return(
        <div> 
            <Paper elevation={3} style={{
                margin:200,
                width:200,
                }} >
            {/* <Box sx={{ width: 1/4 }}> */}
            <input type="checkbox" id={props.memoryItem.id} onClick= {handleCheckBox}></input>
            <h1>{props.memoryItem.title}</h1>
            {/* images always put in public folder  not client*/}
            <img className="image-container" 
                src={props.memoryItem.memory_file}>
            </img>  
        <p>{props.memoryItem.memory_description}</p>
        {/* </Box> */}
        </Paper> 
        </div>
    )
}
export default Memory