import {getRandom} from '../Services/getRequests.js'
import { useState, useEffect } from 'react'
import React from 'react'

function Random() {
const [randomGif, setrandomGif] = useState([])

useEffect(()=>{
    getRandom()
    .then(res => setrandomGif(res.data.data.images.downsized_large.url))
  },[])

 function nextGif(){
   getRandom()
  .then(res => setrandomGif(res.data.data.images.downsized_large.url))
}

return(

    <div id='random'>
      <br/>
      <h1 style={{color:'blue', fontFamily:'cursive'}}>Here is a random gif.</h1>
      <br/>
      <button onClick={()=> {nextGif()}}>Get a new random gif</button><br/>
      <img src={randomGif}/>
    </div>
  )
}

export default Random