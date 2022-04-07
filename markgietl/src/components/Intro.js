import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div className="intro-container">
        <div><h1 className="headingIntro">A glimpse into my software development journey!</h1></div>
        <div><img className="myPhoto" src='/images/me.jpg' alt='me'></img></div>
    </div>
  )
}

export default Intro
