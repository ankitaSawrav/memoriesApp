import { Link } from "react-router-dom";
import axios from "axios"
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Dropzone from './Dropzone.js'

// https://www.youtube.com/watch?v=fGngPBk4Ioc&t=180s&ab_channel=ckmobile
function AddMemories({isLoggedin,user,userId}){
    const [images,setImages] = useState([])


    const [date,setDate] = useState(null)
    const [memoryTitle,setMemoryTitle] = useState(null)
    const [description,setMemoryDescription] = useState(null)
    const [image,setMemoryImage] = useState(null)
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(images, 'add memory')
      },[images])
      
      const handleChange=(event)=>{
        console.log(event.target.className)
        if(event.target.className === 'memory-title'){
            setMemoryTitle(event.target.value)
        }
        if(event.target.className === 'description'){
            setMemoryDescription(event.target.value)
        }
    }
    const selectDate = (event)=>{
        setDate(event.target.value)
    }


    const handleSubmit = (event)=>{

        event.preventDefault()
        console.log("in handle Submit")
        const memoryData = {
            "userid":userId,
            "memory_date":date,
            "memory_description":description ,
            "memory_file":images,
            "title":memoryTitle
        }
        console.log(memoryData,"memoryData")
        


        axios.post("/api/memories",memoryData)
        .then((response)=>{
            if(response.data.success){
            navigate('/', {replace: true});
            }
            else{
                //write the logic tfor handle error TBC
                console.log(response.data)
            }
        })
        .catch(error=>{
            console.log(error," on line 63 add memories")
        })
       
    }

    // const date_today = new Date()

    // console.log(date_today,"today's date")

    // console.log(date)
    //need to disable the date selectection after current date //lowest Ui priority
    //to react this https://bobbyhadz.com/blog/javascript-format-date-dd-mm-yyyy and do it 
    return (<div>
        <h1>Add memories</h1>
        <Box>
            <form onSubmit = {(event) => handleSubmit(event)}>
                <label className="title-label" htmlFor="title">Title:</label>
                    <input 
                        className="memory-title"
                        type="text" 
                        placeholder='title' 
                        name='title' 
                        onChange={(event) => handleChange(event)}
                    />
                    <label className="description-label"htmlFor="description">Description:</label>
                    <input 
                        className="description"
                        type="text" 
                        placeholder='description' 
                        name='description' 
                        onChange={(event) => handleChange(event)}
                    />
                  
                  
                    <Dropzone setImagesProps={setImages} images={images}></Dropzone>
                    <label className="memory_date-label" htmlFor="memory_date">Date:</label>
                    <input 
                        className="memory_date"
                        type="date" 
                        // max={new Date()}
                        name='memory_date' 
                        onChange={(event) => selectDate(event)}
                    />
                    
                    <button className="create-memory-btn" 
                        type='submit'
                        onSubmit = {(event)=>this.handleSubmit(event)}
                        >Add Memory
                    </button>
                    <span>
                        Dont want to update now? Go back 
                        {/* <Routes> */}
                        <Link to='/'>HomePage</Link>
                        
                        
                    
                    </span>
            </form>
        </Box>     
    </div>
    )
}
export default AddMemories