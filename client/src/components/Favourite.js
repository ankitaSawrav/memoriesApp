import axios from 'axios'
import {useEffect, useState} from 'react'
import SliderComponent from './SliderComponent.js'

function Favourite ({isLoggedin,user,userId}){
    console.log(user,"user" , userId,"userId")
    const [favListimgurl,setFavListimgUrl]= useState([])
    let favPhotos =[]
    useEffect(() => {
        axios.get(`/api/memories/${userId}`)
        .then(response => {
            console.log(response.data)
            favPhotos=response.data.filter((data)=>{
                return data.favourite===true})
                .map(memo =>{
                    return memo.cloudinary_secure_url
                })
                console.log(favPhotos,"fav")
                
                setFavListimgUrl(favPhotos)
               
        })
    },[user,userId])
    
    console.log(favListimgurl,"collage")
    

    return (
        <div className="favourite-container">
             <SliderComponent images={favListimgurl}></SliderComponent>
        </div>
    )
}
export default Favourite