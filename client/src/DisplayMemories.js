import { Component } from "react";

class DisplayMemories extends Component{
    
    
    render(){
        console.log(this.props)
    return(
        <div>    
        {this.props.memory.title}
        </div>
    )
}
}

export default DisplayMemories