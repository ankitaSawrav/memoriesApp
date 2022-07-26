function AddMemories(){

    const handleSubmit = ()=>{
        console.log("in handle Submit")
    }
    return (<div>
        <h1>Add memories</h1>
         <form onSubmit={handleSubmit}>
            <label htmlFor="memory-title" >title</label>
            
         </form>
    </div>
    )
}
export default AddMemories