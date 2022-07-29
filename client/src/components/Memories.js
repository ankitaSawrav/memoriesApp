import AddMemories from "./AddMemories.js"
import DisplayMemories from "./DisplayMemories.js"


const memoriesData =  [
    
        {
        title: "hello",
        date:"30/3/1093",
        desc:"this is a special one "
        },
        {
        title: "full moon ",
        date:"30/3/1093",
        desc:"this is a special one "
        }
   
]
function Memories() {
   
    return (
       <div className="Main-container">
        <div className="DisplayMemories">
            {memoriesData.map((memory,index)=>{
                return <DisplayMemories 
                memory={memory}
                key = {index}
                ></DisplayMemories>
            })}
        </div>
       </div>
    )
}
export default Memories