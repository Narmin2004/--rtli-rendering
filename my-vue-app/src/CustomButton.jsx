import React from 'react'
import "./CustomButton.css"
import { useState } from 'react'

function CustomButton() {
  const [flag, setflag] = useState(true)
  
  function hadise() {
    let h3 = document.querySelector("h3")
    if (flag == true) {
      h3.innerText = "Message"
      let a = document.querySelector("button");
      let h4 = document.querySelector("h4")
      a.style.backgroundColor = "red"
      a.style.color = "white"
      h4.style.display = "block"
      let p = document.querySelector("p");
      p.style.display = "block";
      setflag(!flag)
    } else {
      h3.innerText = ""
      let a = document.querySelector("button");
      let h4 = document.querySelector("h4")
      a.style.backgroundColor = "black"
      a.style.color = "white"
      h4.style.display = "none"
      let p = document.querySelector("p");
      p.style.display = "none";
      setflag(!flag)
    }
  }

  return (
    <div className='main'>
      <button onClick={hadise}>Click</button>
      <p className='text'>Hello</p>
      <h3></h3>
      <h4>xeberdarliq</h4>
    </div>
  )
}

export default CustomButton