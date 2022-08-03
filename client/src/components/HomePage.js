import Memories from './Memories'

function HomePage ({isLoggedin, user,userId}){
    // console.log(isLoggedin,"islogedin at homepage ")
    // console.log(userId,"userId as displayed on homepage")
    
    return (
       
        <div className="container"> 
        <h1 className="user-greeting">Welcome back {user.toUpperCase()}!!</h1>
        {(isLoggedin? 
            <Memories user={user} userId={userId}></Memories>: <p>you need to Login to view your memories</p>
        )}
        
      
    </div>
    )
}
export default HomePage