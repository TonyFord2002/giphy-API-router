import { getTrending } from '../Services/getRequests'
import React from 'react'
import {useState, useEffect} from 'react'


function Trending() {
const [trendingGif, settrendingGif] = useState([])

useEffect(()=>{
    getTrending()
    .then(res => settrendingGif(res.data.data))

},[])

return (
    <>
      <h1 style={{color:'blue', fontFamily:'cursive'}}>Here are the trending gifs right now.</h1>
<div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}} >

  {trendingGif.map((trendingGif, i) =>{
    return(

      <div key = {i}>
      <img src = {trendingGif.images.downsized_large.url}/>
      </div>

  )})}
      </div>
</>
  )
    }
export default Trending