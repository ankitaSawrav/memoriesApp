import Memories from './Memories'
import './homepage.css'
import SliderComponent from "./SliderComponent.js"

function HomePage ({isLoggedin, user,userId}){
    // console.log(isLoggedin,"islogedin at homepage ")
    // console.log(userId,"userId as displayed on homepage")
    // const images = ["/image/bridge.jpg",
    //                 "/image/cat.jpg",
    //                 "/image/image1.jpg",
    //                 "/image/image2.jpg",
    //                 "/image/image3.jpg",
    //                 "/image/image4.jpg",
    //                 ]
    const images =["/images/coast.jpg","/images/toddlerplaysand.jpg","/images/pathway.jpg","/images/image6.jpg",
"/images/image5.jpg","/images/image4.jpg","/images/image3.jpg","/images/image2.jpg","/images/image1.jpg"
]
    
    return (
       
        <div className="container"> 
        {(isLoggedin? 
        <div>
            <h1 className="user-greeting">Welcome back {user.toUpperCase()}!!</h1>
            <Memories user={user} userId={userId}></Memories>
            </div>: 
            <div> 
                
                <p className='msg-info'>Login to view your memories..</p>
                <SliderComponent images={images}></SliderComponent>
            </div>
        )}
        
      
    </div>
    )
}
export default HomePage