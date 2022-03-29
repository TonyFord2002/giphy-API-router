import React from 'react'
import {getsearch} from '../Services/getRequests'
import {useState, useEffect} from 'react'

function Search() {
    const [searchGif, setsearchGif] = useState([])

    function searchForGif(){
        getsearch(document.querySelector('#box').value)
        .then(res=> setsearchGif(res.data.data))
    }
    console.log(searchGif)


  return (
      <>
      <h1 style={{color:'blue', fontFamily:'cursive'}}>You can search for gifs here.</h1>
        <input id='box'/>
        <button onClick={()=>{searchForGif()}}>Submit</button>
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>

  {searchGif.map((searchGif, i) =>{
    return(

      <div key = {i}>
      <img src = {searchGif.images.downsized_large.url}/>
      </div>

  )})}
      </div>
  </>
  )
}

export default Search