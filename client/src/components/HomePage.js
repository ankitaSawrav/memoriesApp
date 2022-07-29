import Memories from './Memories'

function HomePage ({isLoggedin, user}){
    console.log(isLoggedin,"islogedin at homepage ")
    return (
        <div className="container"> 
        <h1>Memo</h1>
    
        <Memories user={user}></Memories>
      
    </div>
    )
}
export default HomePage