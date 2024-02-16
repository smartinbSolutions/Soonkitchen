import React from 'react'
import logo from '../../Assets/logo/logoyuvarlak.png'
import './Title.css'
const Title = ({title}) => {
  return (
    <div className='title'>
     <img src={logo} alt='logo'/>
      <h1>{title}</h1>
    </div>
  )
}

export default Title
