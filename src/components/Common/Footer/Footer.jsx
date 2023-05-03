import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer flex-justify-center'>
      <BsGithub id='footer-icon'/>
      <BsLinkedin id='footer-icon'/>
      <BsTwitter id='footer-icon'/>
      <BsFacebook id='footer-icon'/>
      <BsInstagram id='footer-icon'/>
    </div>
  )
}

export default Footer