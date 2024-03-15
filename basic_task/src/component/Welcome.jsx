import React from 'react'

function Welcome() {
// event handling 
    function handleClick(){
 console.log("Hey! I am here!!!")
    }
  return (
    <div>
     <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Welcome
