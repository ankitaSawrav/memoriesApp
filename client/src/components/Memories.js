import axios from "axios"
// import AddMemories from "./AddMemories.js"
import Memory from "./Memory.js"
import { useEffect ,useState} from 'react';
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
    const userId=props.userId
   console.log(userId,"memories")
    const [memoriesData,setMemoriesData] =  useState([])

    useEffect(()=>{ axios.get(`/api/memories/${userId}`)
                        .then(response=>{
                            console.log(response.data)
                            setMemoriesData(response.data)
    }
 )},[userId])
      
    
    
  

   
    return (
       <div className="Main-container">
        <div className="Memory">
            {memoriesData.map((memoryItem,index)=>{
                return <Memory 
                memoryItem={memoryItem}
                key = {index}
                userId= {props.userId}
                id={props.id}
                ></Memory>
            })}
        </div>
       </div>
    )
}
export default Memories