import axios from "axios"
// import AddMemories from "./AddMemories.js"
import Memory from "./Memory.js"
import {useEffect,  useState} from 'react';
import './Memory.css';
import { Box, Grid, Paper } from "@material-ui/core";
import "./memories.css"

// hardcoded Sample data
// const memoriesDataOld =  [

//         {
//         title: "hello",
//         date:"30/3/1093",
//         desc:"this is a special one ",
//         images:["/images/coast.jpg"]
//         },
//         {
//         title: "full moon ",
//         date:"30/3/1093",
//         desc:"this is a special one too ",
//         images:["/images/toddlerplaysand.jpg"]
//         }

// ]
function Memories(props) {
    const userId = props.userId

    console.log(userId, "memories")
    const [memoriesData, setMemoriesData] = useState([])
    const [selectedMemories, setSelectedMemories] = useState([]) //array to 

    const selectMemory = (memoryId, checkBoxValue) => {
        console.log("here i am with memoid:", memoryId)
        console.log(checkBoxValue, "value of checkbox in Momories")

        if (checkBoxValue) {
            setSelectedMemories([...selectedMemories, memoryId])
            console.log(selectedMemories, "selectedMemories")
        } else {
            //grabs the selected checkbox index from select memory
            console.log("in else")
            const indexOfSelectedCheckBox = selectedMemories.indexOf(memoryId)
            console.log("indexOfSelectedCheckBox", indexOfSelectedCheckBox)
            console.log(selectedMemories, "selectedMemories")
            const newMemoryArray = [...selectedMemories]
            console.log(newMemoryArray, "newMemoryArray")
            const updatedArray = [...newMemoryArray.splice(indexOfSelectedCheckBox, 1)]
            console.log(updatedArray, "updatedArray")
            console.log(newMemoryArray, "NEW MEMORY ARRAY")
            setSelectedMemories([...newMemoryArray])
        }
    }
    const handleDelete = () => {
        console.log("in delete")
        // if (selectedMemories.length===0){
            
        // }
        selectedMemories.forEach(element => {
            
        axios.delete(`api/memories/${element}`,element)
            .then((response)=>{
                console.log(response.data)
                refreshMemories()
                console.log(selectedMemories,"selected memories")
            })
        });
 
    }
    
    const refreshMemories = ()=> {
        console.log(userId)
        axios.get(`/api/memories/${userId}`)
            .then(response => {
                console.log(response.data)
                setMemoriesData(response.data)

            })
    }

    useEffect(() => {
        refreshMemories()
    },[props.userId,props.user])
    
    return(<div className = "main-container" >
        {(memoriesData.length===0? <p className="tag-msg"> Lets create some more Memories!!</p>:
        <div className="Memories-container">
            <button className = "delete-btn" onClick = {handleDelete} > Delete Button </button> 
            <div className = "Memory" >
                { memoriesData.map((memoryItem, index) =>{
                    return (
                    <Memory memoryItem = {memoryItem}
                        key = {index}
                        userId = {props.userId}
                        id = {props.id}
                        index = {index}
                        //prev approach not nowrking as id was getting displayed as undefined 
                        // onSelect = {()=>{selectMemory(props.id)}}
                        onSelect = {
                                (memoryId, checkBoxValue) => {
                                    selectMemory(memoryId, checkBoxValue)
                                }
                            } >
                    </Memory>)
                })}
                
            </div>
        </div>)}
    </div>)

    
    // return (
    //     <div className = "main-container">
    //          {(memoriesData.length===0? <p className="tag-msg"> Lets create some more Memories!!</p>: 
    //                 <div className="Memories-container"> 
    //                     <button className = "delete-btn" onClick = {handleDelete} > Delete Button </button> 
    //                     <Box sx={{padding: "10px"}} xs={4} m={5}>
    //                     <Grid sx={{padding: "10px"}} container spacing={2} margin={2}>
    //                         { memoriesData.map((memoryItem, index) =>{
    //                             return (
    //                                 <Grid xs={3} item key = {index}>
    //                                     <Memory memoryItem = {memoryItem}
                                            
    //                                         userId = {props.userId}
    //                                         id = {props.id}
    //                                         index = {index}
    //                                         //prev approach not nowrking as id was getting displayed as undefined 
    //                                         // onSelect = {()=>{selectMemory(props.id)}}
    //                                         onSelect = {
    //                                                 (memoryId, checkBoxValue) => {
    //                                                     selectMemory(memoryId, checkBoxValue)
    //                                                 }
    //                                             } >
    //                                     </Memory>
    //                                 </Grid >
    //                             )
    //                         })}

    //                     </Grid>
    //                     </Box>
    //                 </div> 
    //         )}
    //     </div>

    // )

}
export default Memories;