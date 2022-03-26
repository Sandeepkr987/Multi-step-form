import React, { useState } from 'react'
import '../App.css'
import './Header.css'
import Header from './Header'

function HomePage() {
  const CompanyName = ['Welcome to Sirpi ! ']
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    cursor: 'pointer',
    margin: '4px 2px'
  }

  return (
    <div>
      <div className='header'>
      <Header/>
      <h4 style={{color: 'gray', margin: '18px 0 0 0'}} >Tap to read more about us....</h4>
      <button style={mystyle}>Read more</button>
            <h2><u>{CompanyName}</u></h2>
      </div>
    </div>
  )
}

export default HomePage