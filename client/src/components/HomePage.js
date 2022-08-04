import Memories from './Memories'
import './homepage.css'
import SliderComponent from "./SliderComponent.js"

function HomePage ({isLoggedin, user,userId}){
    // console.log(isLoggedin,"islogedin at homepage ")
    // console.log(userId,"userId as displayed on homepage")
    
    return (
       
        <div className="container"> 
        <h1 className="user-greeting">Welcome back {user.toUpperCase()}!!</h1>
        {(isLoggedin? 
            <Memories user={user} userId={userId}></Memories>: 
            <div> 
                
                <p className='msg-info'>Login to view your memories..</p>
                <SliderComponent></SliderComponent>
            </div>
        )}
        
      
    </div>
    )
}
export default HomePage