import React from 'react'

const Back = () => {
  return (
   <div> 
    <button className="play">
                <PlayArrow/>
                <span>Play</span>
             </button>
             <button className="more">
                <InfoOutlined/>
                <span>info</span>
             </button>

   </div>
  )
}

export default Back